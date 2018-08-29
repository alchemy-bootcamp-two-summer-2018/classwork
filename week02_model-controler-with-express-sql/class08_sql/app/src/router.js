import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Neighborhoods from './components/neighborhoods/Neighborhoods.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/neighborhoods', component: Neighborhoods },
    { path: '*', redirect: '/' }
  ]
});