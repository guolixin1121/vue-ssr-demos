
import Vue from 'vue'
import App from './App.vue'

export function createApp () {
  const vm = new Vue({
    render: h => h(App)
  })

  return vm
}