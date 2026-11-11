import { Languages } from 'lucide-react'
import { getLocale, setLocale, t, useLocale, type Locale } from '../../i18n'

export function LanguageToggle({ labeled = false }: { labeled?: boolean }) {
  useLocale()
  const locale = getLocale()
  const choices: Array<{ value: Locale; label: string; compact: string }> = [
    { value: 'vi-VN', label: 'Tiếng Việt', compact: 'VI' },
    { value: 'en-US', label: 'English', compact: 'EN' },
    { value: 'zh-CN', label: '简体中文', compact: '中' },
  ]

  return (
    <div
      className={`language-selector ${labeled ? 'is-labeled' : ''}`}
      role="radiogroup"
      aria-label={t('界面语言')}
    >
      {labeled && <Languages size={15} aria-hidden="true" />}
      {choices.map((choice) => (
        <button
          className={locale === choice.value ? 'is-selected' : ''}
          type="button"
          role="radio"
          aria-checked={locale === choice.value}
          data-tooltip={t(choice.label)}
          key={choice.value}
          onClick={() => setLocale(choice.value)}
        >
          {labeled ? t(choice.label) : choice.compact}
        </button>
      ))}
    </div>
  )
}

export function LanguageQuickToggle() {
  const locale = useLocale()
  const order: Locale[] = ['vi-VN', 'en-US', 'zh-CN']
  const nextLocale = order[(order.indexOf(locale) + 1) % order.length]
  const nextLabel = nextLocale === 'zh-CN' ? '简体中文' : nextLocale === 'en-US' ? 'English' : 'Tiếng Việt'
  const compact = nextLocale === 'zh-CN' ? '中' : nextLocale === 'en-US' ? 'EN' : 'VI'

  return (
    <button
      className="language-quick-toggle"
      type="button"
      aria-label={t('切换为 {language}', { language: t(nextLabel) })}
      data-tooltip={t('切换为 {language}', { language: t(nextLabel) })}
      onClick={() => setLocale(nextLocale)}
    >
      <Languages size={14} aria-hidden="true" />
      <span>{compact}</span>
    </button>
  )
}
