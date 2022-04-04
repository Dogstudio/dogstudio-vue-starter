// Root
import Root from './index.vue'

// Pages
import Home from '@@/pages/index.vue'
import Error from '@@/pages/error.vue'

// Utils
import {
  getLocaleCookie,
  getBrowserLocale,
  getFallbackLocale,
  getSupportedLocales,
} from '@/utils/helpers/language'

// Routes
const routes = [
  {
    path: '/',
    redirect: () => {
      const cookie = getLocaleCookie()
      const browser = getBrowserLocale()
      const fallback = getFallbackLocale()

      // Locale
      const locale = cookie || browser || fallback

      // Redirect User
      return { path: `/${locale}` }
    },
  },
  {
    path: `/:locale(${getSupportedLocales()})`,
    component: Root,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/:route(.*)*',
    component: Error,
  },
]

export default routes
