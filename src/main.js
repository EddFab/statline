import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Correct Tailwind CSS path
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
