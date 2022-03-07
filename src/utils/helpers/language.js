/**
 * Return the direction of the layout based on the active locale
 *
 * @param {String} locale - Active locale
 * @return {String} Layout direction
 */
export const getLocaleDirection = (locale) => {
  return ['ar', 'az', 'dv', 'he', 'ku', 'fa', 'ur'].includes(locale)
    ? 'rtl'
    : 'ltr'
}

/**
 * Get the locale from the Local Storage
 *
 * @return {String} Language
 */
export const getLocaleCookie = (cookie = 'VUE_APP_LOCALE') => {
  return localStorage.getItem(cookie)
}

/**
 * Get the fallback locale from environment variables
 *
 * @return {String} Fallback locale
 */
export const getFallbackLocale = () => {
  return import.meta.env.VUE_APP_FALLBACK_LOCALE || 'en'
}

/**
 * Get the default locale from environment variables
 *
 * @return {String} Default locale
 */
export const getDefaultLocale = () => {
  return import.meta.env.VUE_APP_DEFAULT_LOCALE || getFallbackLocale()
}

/**
 * Get the supported locales from the environment variables
 *
 * @return {String} Supported locales
 */
export const getSupportedLocales = () => {
  return import.meta.env.VUE_APP_SUPPORTED_LOCALES || 'en'
}

/**
 * Get the browser locale
 *
 * @return {String} Browser locale
 */
export const getBrowserLocale = () => {
  const supportedLocales = getSupportedLocales()
  const supportedLocalesArray = supportedLocales.split('|')

  const locale = navigator.language || navigator.userLanguage

  if (supportedLocalesArray.includes(locale)) {
    return locale
  }

  return getFallbackLocale()
}

/**
 * Set the DOM attributes based on locale
 *
 * @param {String} locale - Active locale
 */
export const setLocaleAttributes = (locale) => {
  document.documentElement.setAttribute('dir', getLocaleDirection(locale))
  document.documentElement.setAttribute('lang', locale)
}

/**
 * Set the locale in the Local Storage
 *
 * @param {String} locale - Active locale
 */
export const setLocaleCookies = (locale, cookie = 'VUE_APP_LOCALE') => {
  const supportedLocales = getSupportedLocales()
  const supportedLocalesArray = supportedLocales.split('|')

  const prev = getLocaleCookie()
  const next = locale

  if (supportedLocalesArray.includes(next)) {
    if (prev !== next) {
      localStorage.setItem(cookie, next)
    }
  }
}
