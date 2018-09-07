import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import SlotsDemo from './components/SlotsDemo.vue';
import TransitionsDemo from './components/TransitionsDemo.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/slots', component: SlotsDemo },
    { path: '/transitions', component: TransitionsDemo },
    { path: '*', redirect: '/' }
  ]
});