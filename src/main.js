import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Register the service worker
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })
