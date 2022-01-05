import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import BaseModal from './components/ui/BaseModal.vue'

import LottieAnimation from 'lottie-web-vue'

const app = createApp(App)

app.use(LottieAnimation)
app.use(router)

app.component('base-modal', BaseModal);

app.mount('#app')
