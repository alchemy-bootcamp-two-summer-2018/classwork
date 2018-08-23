import Vue from 'vue';
// step #0: `npm i vue-router`
// step #1: import the core Router
import VueRouter from 'vue-router';
import App from './App.vue';
// step #3 import our specfic route map
import router from './router';

Vue.config.productionTip = false;
// step #2: tell Vue about the VueRouter
Vue.use(VueRouter);

new Vue({
  // step #4: pass in router object
  router,
  render: h => h(App)
}).$mount('#app');
