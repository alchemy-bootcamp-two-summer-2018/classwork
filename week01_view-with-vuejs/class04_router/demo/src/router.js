import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Animals from './components/Animals.vue';
import AddAnimal from './components/AddAnimal.vue';
import AnimalDetail from './components/AnimalDetail.vue';
import EditAnimal from './components/EditAnimal.vue';
import AnimalTiles from './components/AnimalTiles.vue';
import AnimalList from './components/AnimalList.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { 
      path: '/animals', 
      component: Animals, 
      children: [
        { path: 'tile', component: AnimalTiles },
        { path: 'list', component: AnimalList },
        { path: '', redirect: 'tile' }
      ]
    },
    { path: '/animals/add', component: AddAnimal },
    { path: '/animals/:key', component: AnimalDetail },
    { path: '/animals/:key/edit', component: EditAnimal },
    { path: '*', redirect: '/' }
  ]
});