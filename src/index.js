import { createApp } from 'vue'

// Say Hello
import '@/utils/say-hello'

import * as constants from '@/utils/constants'

// Dependencies
import i18n from '@/locales'
import store from '@/store'
import router from '@/router'

// Application
import App from '@/app/index.vue'

// Global Styles
import '@/styles/global.scss'

// Create Application
const app = createApp(App)

// Tools
app.use(i18n)
app.use(store)
app.use(router)

// Mount
app.mount('#app')
