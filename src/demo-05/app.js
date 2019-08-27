import Vue from 'vue'
import createRouter from './router.js'
import App from './App.vue'
 
 
// export 一个函数，用于创建新的vue实例
export function createApp(){
    
    const router = createRouter();
    
    const vm = new Vue({
        router,
        render: h => h(App)
    });
 
    return vm;
}