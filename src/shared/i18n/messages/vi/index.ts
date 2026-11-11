import { viAdmin } from './admin'
import { viDomains } from './domains'
import { viMailCredentials } from './mail-credentials'
import { viAdminMail } from './admin-mail'
import { viApi } from './api'
import { viCore } from './core'
import { viErrors } from './errors'
import { viExtension } from './extension'
import { viGmail } from './gmail'
import { viIcloud } from './icloud'
import { viInvites } from './invites'
import { viLinuxDoMail } from './linux-do-mail'
import { viMailFeatures } from './mail-features'
import { viMailWorkspaces } from './mail-workspaces'
import { viMicrosoft } from './microsoft'
import { viNaverMail } from './naver-mail'
import { viYandexMail } from './yandex-mail'
import { viMailboxSettings } from './mailbox-settings'
import { viOauth } from './oauth'
import { viRateLimit } from './rate-limit'
import { viQqMail } from './qq-mail'
import { viSecurity } from './security'
import { viVersion } from './version'
import { viTelegram } from './telegram'

export const vietnameseTranslations: Record<string, string> = {
  ...viCore,
  ...viMailCredentials,
  ...viAdmin,
  ...viDomains,
  ...viAdminMail,
  ...viInvites,
  ...viErrors,
  ...viExtension,
  ...viOauth,
  ...viSecurity,
  ...viMailFeatures,
  ...viMailWorkspaces,
  ...viMailboxSettings,
  ...viRateLimit,
  ...viVersion,
  ...viTelegram,
  ...viIcloud,
  ...viLinuxDoMail,
  ...viGmail,
  ...viMicrosoft,
  ...viNaverMail,
  ...viYandexMail,
  ...viQqMail,
  ...viApi,
}
