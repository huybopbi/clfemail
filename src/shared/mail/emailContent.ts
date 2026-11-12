export function forceLightEmailColorScheme(css: string): string {
  return css.replace(
    /\(\s*prefers-color-scheme\s*:\s*dark\s*\)/gi,
    '(prefers-color-scheme: omnimail-disabled)',
  )
}

export function normalizeRemoteImageSource(value: string): string | null {
  try {
    const url = new URL(value)
    if (url.protocol === 'http:') url.protocol = 'https:'
    const hostname = url.hostname.toLowerCase().replace(/\.$/, '')
    if (
      url.protocol !== 'https:'
      || url.port !== ''
      || url.username !== ''
      || url.password !== ''
      || !hostname.includes('.')
      || hostname.includes(':')
      || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname)
    ) return null
    return url.href
  } catch {
    return null
  }
}

export function remoteImageProxyTarget(value: string): string | null {
  const trimmed = value.trim()
  const absolute = trimmed.startsWith('//') ? `https:${trimmed}` : trimmed
  return normalizeRemoteImageSource(absolute)
}

function cssUrlAt(css: string, start: number): { value: string; end: number } | null {
  if (start > 0 && !/[\s:,(]/.test(css[start - 1])) return null
  let index = start + 4
  while (index < css.length && /\s/.test(css[index])) index += 1
  if (index >= css.length) return null
  const quote = css[index] === '"' || css[index] === "'" ? css[index] : ''
  if (quote) index += 1
  let value = ''
  while (index < css.length) {
    const char = css[index]
    if (char === '\\' && index + 1 < css.length) {
      value += css[index + 1]
      index += 2
      continue
    }
    if (quote ? char === quote : (char === ')' || /\s/.test(char))) break
    value += char
    index += 1
  }
  if (quote) {
    if (css[index] !== quote) return null
    index += 1
  }
  while (index < css.length && /\s/.test(css[index])) index += 1
  if (css[index] !== ')') return null
  return { value: value.trim(), end: index + 1 }
}

export function proxyCssRemoteImages(
  css: string,
  proxy: (httpsUrl: string) => string,
): string {
  const lower = css.toLowerCase()
  let result = ''
  let index = 0
  while (index < css.length) {
    const start = lower.indexOf('url(', index)
    if (start < 0) {
      result += css.slice(index)
      break
    }
    const parsed = cssUrlAt(css, start)
    if (!parsed) {
      result += css.slice(index, start + 4)
      index = start + 4
      continue
    }
    result += css.slice(index, start)
    const remote = remoteImageProxyTarget(parsed.value)
    const proxied = remote ? proxy(remote).replace(/["\\\r\n]/g, '') : ''
    result += proxied ? `url("${proxied}")` : css.slice(start, parsed.end)
    index = parsed.end
  }
  return result
}

export function applyRemoteImageBackgrounds(
  document: Document,
  proxy: (httpsUrl: string) => string,
): void {
  document.querySelectorAll('style').forEach((style) => {
    style.textContent = proxyCssRemoteImages(style.textContent ?? '', proxy)
  })
  document.querySelectorAll('[style]').forEach((node) => {
    const style = node.getAttribute('style') ?? ''
    if (!style.toLowerCase().includes('url(')) return
    node.setAttribute('style', proxyCssRemoteImages(style, proxy))
  })
  document.querySelectorAll('[background]').forEach((node) => {
    const remote = remoteImageProxyTarget(node.getAttribute('background') ?? '')
    if (remote) node.setAttribute('background', proxy(remote))
  })
}

export function forceLightEmailDocument(document: Document): void {
  document.querySelectorAll('meta[name="color-scheme"], meta[name="supported-color-schemes"]')
    .forEach((node) => node.remove())
  document.querySelectorAll('style').forEach((style) => {
    style.textContent = forceLightEmailColorScheme(style.textContent ?? '')
  })
}

export function loadDeferredRemoteImages(
  document: Document,
  onSettled: () => void,
): void {
  document.querySelectorAll<HTMLImageElement>('img[data-omnimail-src]').forEach((image) => {
    const source = image.dataset.omnimailSrc
    if (!source) return
    image.addEventListener('load', onSettled, { once: true })
    image.addEventListener('error', onSettled, { once: true })
    image.removeAttribute('data-omnimail-src')
    image.setAttribute('src', source)
  })
}
