import { createApp } from './app'

const { app } = createApp()

window.addEventListener('load',(e) => {
   app.$mount('#app')
})