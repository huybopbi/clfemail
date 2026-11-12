import { describe, expect, it } from 'vitest'
import { proxyCssRemoteImages, remoteImageProxyTarget } from './emailContent'

const proxy = (source: string) => (
  `https://mail.example/api/remote-images?url=${encodeURIComponent(source)}`
)

describe('email background images', () => {
  it('rewrites remote urls and leaves embedded or local urls in place', () => {
    const css = [
      'background: #fff url("https://ae01.alicdn.com/kf/hero.jpg") center / cover no-repeat;',
      "background-image: url('http://ae01.alicdn.com/kf/b.jpg'), url(data:image/gif;base64,AAAA);",
      'background-image: url(//ae01.alicdn.com/kf/c.jpg);',
      'background-image: url( "https://ae01.alicdn.com/kf/d.jpg?x=1&y=2" );',
      'background-image: url(/local.jpg);',
      'background-image: url(javascript:alert(1));',
    ].join('\n')

    const rewritten = proxyCssRemoteImages(css, proxy)

    expect(rewritten).toContain(proxy('https://ae01.alicdn.com/kf/hero.jpg'))
    expect(rewritten).toContain(proxy('https://ae01.alicdn.com/kf/b.jpg'))
    expect(rewritten).toContain(proxy('https://ae01.alicdn.com/kf/c.jpg'))
    expect(rewritten).toContain(proxy('https://ae01.alicdn.com/kf/d.jpg?x=1&y=2'))
    expect(rewritten).toContain('center / cover no-repeat')
    expect(rewritten).toContain('url(data:image/gif;base64,AAAA)')
    expect(rewritten).toContain('url(/local.jpg)')
    expect(rewritten).toContain('url(javascript:alert(1))')
    expect(rewritten).not.toContain('https://ae01.alicdn.com/kf/hero.jpg")')
  })

  it('accepts public image addresses used as element backgrounds', () => {
    expect(remoteImageProxyTarget(' https://ae01.alicdn.com/kf/hero.jpg ')).toBe(
      'https://ae01.alicdn.com/kf/hero.jpg',
    )
    expect(remoteImageProxyTarget('//ae01.alicdn.com/kf/hero.jpg')).toBe(
      'https://ae01.alicdn.com/kf/hero.jpg',
    )
    expect(remoteImageProxyTarget('data:image/gif;base64,AAAA')).toBeNull()
    expect(remoteImageProxyTarget('javascript:alert(1)')).toBeNull()
  })
})
