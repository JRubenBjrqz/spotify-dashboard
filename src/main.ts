import { createApp } from 'vue'
import { VUETIFY_SETTINGS } from './plugins/vuetify'

// Components
import App from './App.vue'

// Create Vue App
const APP = createApp(App)

// Use Plugins
APP.use(VUETIFY_SETTINGS)

// Mount Vue App
APP.mount('#app')


