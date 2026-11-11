import { useSyncExternalStore } from 'react'
import { enCore } from './messages/en/core'

export type Locale = 'zh-CN' | 'en-US' | 'vi-VN'
export type TranslationValues = Record<string, string | number>

const STORAGE_KEY = 'omnimail-locale'
const listeners = new Set<() => void>()

export function detectLocale(
  stored?: string | null,
  languages: readonly string[] = [],
): Locale {
  if (stored === 'zh-CN' || stored === 'en-US' || stored === 'vi-VN') return stored
  void languages
  return 'vi-VN'
}

function initialLocale(): Locale {
  if (typeof window === 'undefined') return 'vi-VN'
  let stored: string | null = null
  try {
    stored = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    // Storage can be unavailable in strict privacy modes.
  }
  return detectLocale(stored, navigator.languages || [navigator.language])
}

let currentLocale = initialLocale()
const english = {
  ...enCore,
}
let requestedLocale = currentLocale
let englishLoaded = false
let englishLoad: Promise<void> | null = null
const vietnamese: Record<string, string> = {}
let vietnameseLoaded = false
let vietnameseLoad: Promise<void> | null = null
const englishPlurals: Record<string, [string, string]> = {
  '{count} 个邮箱地址': ['{count} mailbox', '{count} mailboxes'],
  '{count} 个启用地址': ['{count} enabled address', '{count} enabled addresses'],
  '{count} 个已有邮箱会保留': [
    '{count} existing mailbox will remain',
    '{count} existing mailboxes will remain',
  ],
  '{count} 封': ['{count} message', '{count} messages'],
  '{date}：{count} 封': ['{date}: {count} message', '{date}: {count} messages'],
  '{count} 条': ['{count} entry', '{count} entries'],
  '{count} 个邮箱': ['{count} mailbox', '{count} mailboxes'],
  '最多 {count} 个邮箱': ['Up to {count} mailbox', 'Up to {count} mailboxes'],
  '已使用 {count} 个邮箱': ['{count} mailbox used', '{count} mailboxes used'],
  '{count} 天': ['{count} day', '{count} days'],
  '{count} 小时': ['{count} hour', '{count} hours'],
}

export function hasEnglishTranslation(source: string): boolean {
  if (!/[\u3400-\u9fff]/.test(source)) return true
  return Object.hasOwn(english, source)
    || Object.hasOwn(englishPlurals, source)
}

export function ensureEnglishTranslations(): Promise<void> {
  if (englishLoaded) return Promise.resolve()
  if (!englishLoad) {
    englishLoad = import('./messages/en')
      .then(({ englishTranslations }) => {
        Object.assign(english, englishTranslations)
      })
      .catch(() => undefined)
      .finally(() => {
        englishLoaded = true
        listeners.forEach((listener) => listener())
      })
  }
  return englishLoad
}

export function ensureVietnameseTranslations(): Promise<void> {
  if (vietnameseLoaded) return Promise.resolve()
  if (!vietnameseLoad) {
    vietnameseLoad = import('./messages/vi')
      .then(({ vietnameseTranslations }) => {
        Object.assign(vietnamese, vietnameseTranslations)
      })
      .catch(() => undefined)
      .finally(() => {
        vietnameseLoaded = true
        listeners.forEach((listener) => listener())
      })
  }
  return vietnameseLoad
}

export function hasVietnameseTranslation(source: string): boolean {
  if (!/[\u3400-\u9fff]/.test(source)) return true
  return Object.hasOwn(vietnamese, source)
}

export function translationsReady(): boolean {
  if (currentLocale === 'zh-CN') return true
  if (currentLocale === 'en-US') return englishLoaded
  return vietnameseLoaded
}

function syncDocument(locale: Locale): void {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) {
    description.content = locale === 'zh-CN'
      ? 'MailFast — 简洁、私有的 Cloudflare 域名邮箱。'
      : locale === 'vi-VN'
        ? 'MailFast — hộp thư tên miền riêng trên Cloudflare.'
        : 'MailFast — a focused, private domain mailbox on Cloudflare.'
  }
}

syncDocument(currentLocale)

export function getLocale(): Locale {
  return currentLocale
}

export function subscribeLocale(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setLocale(locale: Locale): void {
  requestedLocale = locale
  if (locale === currentLocale) return
  if (locale === 'en-US' && !englishLoaded) {
    void ensureEnglishTranslations().then(() => {
      if (requestedLocale === 'en-US') setLocale('en-US')
    })
    return
  }
  if (locale === 'vi-VN' && !vietnameseLoaded) {
    void ensureVietnameseTranslations().then(() => {
      if (requestedLocale === 'vi-VN') setLocale('vi-VN')
    })
    return
  }
  currentLocale = locale
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // The active page can still switch language without persistence.
  }
  syncDocument(locale)
  listeners.forEach((listener) => listener())
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribeLocale, getLocale, getLocale)
}

export function useTranslationsReady(): boolean {
  return useSyncExternalStore(subscribeLocale, translationsReady, translationsReady)
}

export function translate(
  source: string,
  values: TranslationValues = {},
  locale = currentLocale,
): string {
  if (locale === 'en-US') {
    const count = Number(values.count)
    const plural = englishPlurals[source]
    if (plural && Number.isFinite(count)) {
      const template = count === 1 ? plural[0] : plural[1]
      return template.replace(/\{(\w+)\}/g, (match, key: string) => (
        Object.hasOwn(values, key) ? String(values[key]) : match
      ))
    }
    const domainCount = source.match(/^OmniMail 中已管理 (\d+) 个收件域名。$/)
    if (domainCount) {
      return `OmniMail manages ${domainCount[1]} receiving domain${domainCount[1] === '1' ? '' : 's'}.`
    }
    const mailboxCount = source.match(/^当前已创建 (\d+) 个邮箱地址。$/)
    if (mailboxCount) {
      return `${mailboxCount[1]} mailbox address${mailboxCount[1] === '1' ? '' : 'es'} ha${mailboxCount[1] === '1' ? 's' : 've'} been created.`
    }
  }
  if (locale === 'vi-VN') {
    const domainCount = source.match(/^OmniMail 中已管理 (\d+) 个收件域名。$/)
    if (domainCount) return `OmniMail đang quản lý ${domainCount[1]} tên miền nhận thư.`
    const mailboxCount = source.match(/^当前已创建 (\d+) 个邮箱地址。$/)
    if (mailboxCount) return `Đã tạo ${mailboxCount[1]} địa chỉ hộp thư.`
  }
  const catalog = locale === 'en-US' ? english : locale === 'vi-VN' ? vietnamese : null
  const template = catalog ? catalog[source] || source : source
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (
    Object.hasOwn(values, key) ? String(values[key]) : match
  ))
}

export const t = translate

if (currentLocale === 'en-US') void ensureEnglishTranslations()
if (currentLocale === 'vi-VN') void ensureVietnameseTranslations()
