import VueRouter from 'vue-router';
import People from './components/People.vue';

export default new VueRouter({
  routes: [
    { path: '/people', component: People },
    { path: '*', redirect: '/' }
  ]
});