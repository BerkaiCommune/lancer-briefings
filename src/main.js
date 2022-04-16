import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.min.css'

import '@/assets/styles/_reset.css'
import '@/assets/styles/_base.css'
import '@/assets/styles/_animations.css'

import Router from './router'

createApp(App)
	.use(Router)
	.use(Oruga)
	.mount('#app')
