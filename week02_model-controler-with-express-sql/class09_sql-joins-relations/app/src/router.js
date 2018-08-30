import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import NeighborhoodsList from './components/neighborhoods/NeighborhoodsList.vue';
import AddNeighborhood from './components/neighborhoods/AddNeighborhood.vue';
import Neighborhood from './components/neighborhoods/Neighborhood.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/neighborhoods', component: NeighborhoodsList },
    { path: '/neighborhoods/add', component: AddNeighborhood },
    { path: '/neighborhoods/:id', component: Neighborhood },
    { path: '*', redirect: '/' }
  ]
});