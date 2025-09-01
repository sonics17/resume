import { createApp } from 'vue'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg'

import '@/assets/styles/reset.css'
import '@/assets/styles/fonts.css'
import '@/assets/styles/typography.css'
import '@/assets/styles/layout.scss'

const app = createApp(App)
app.component('inline-svg', InlineSvg)
app.mount('#app')
