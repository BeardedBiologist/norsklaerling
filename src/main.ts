import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { renameStorage } from './lib/renameStorage'

renameStorage()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
