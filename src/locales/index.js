// Vue i18n
import { createI18n } from 'vue-i18n'

// Utils
import { getDefaultLocale, getFallbackLocale } from '@/utils/helpers/language'

// Messages
// import en from './en.js'
// import fr from './fr.js'

const messages = {
  // en,
  // fr,
}

// Instance
const locale = getDefaultLocale()
const fallbackLocale = getFallbackLocale()

const i18n = createI18n({
  locale,
  messages,
  fallbackLocale,
})

// Export Locales
export default i18n
