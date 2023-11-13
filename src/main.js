import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BaseButton from './shared/BaseButton.vue'
import CtaButton from './shared/CtaButton.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component('BaseButton', BaseButton)
app.component('CtaButton', CtaButton)

app.mount('#app')
