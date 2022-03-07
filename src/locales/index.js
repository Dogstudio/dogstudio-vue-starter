// Vue i18n
import { createI18n } from 'vue-i18n'

// Utilities
import { getDefaultLocale, getFallbackLocale } from '@/utils/helpers/language'

// Messages
// import en from './en.json'
// import fr from './fr.json'

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
