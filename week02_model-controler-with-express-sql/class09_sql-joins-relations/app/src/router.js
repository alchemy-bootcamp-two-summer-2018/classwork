import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Neighborhoods from './components/neighborhoods/Neighborhoods.vue';
import AddNeighborhood from './components/neighborhoods/AddNeighborhood.vue';
import Neighborhood from './components/neighborhoods/Neighborhood.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/neighborhoods', component: Neighborhoods },
    { path: '/neighborhoods/add', component: AddNeighborhood },
    { path: '/neighborhoods/:id', component: Neighborhood },
    { path: '*', redirect: '/' }
  ]
});