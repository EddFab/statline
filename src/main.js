import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/index.css' // TailwindCSS styles

const app = createApp(App)

app.use(router)

app.mount('#app')
