
import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router);
 
const routes = [
    { alias: '/', path: '/mv', component: { template: '<div>foo</div>' } },
    { path: '/lyric', component: { template: '<div>bar</div>' } }
];
 
export default function createRouter(){
   
   let vueRouter = new Router({
        mode: 'history',
        routes
   });
 
   return vueRouter;

}