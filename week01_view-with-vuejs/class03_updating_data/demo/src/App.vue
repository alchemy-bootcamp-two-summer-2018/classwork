<template>
  <div class="app">
    <Animals 
      :animals="animals" 
      :selected="selectedAnimal"
      :onSelect="handleSelect"
    />
    <AnimalViewer 
      :animal="selectedAnimal"
      :onUpdate="handleUpdate"
    />
  </div>
</template>

<script>
import animalsApi from './services/animalsApi';
import Animals from './components/Animals';
import AnimalViewer from './components/AnimalViewer';

export default {
  name: 'app',
  data() {
    return {
      animals: animalsApi.getAnimals(),
      selectedAnimal: null
    };
  },
  components: {
    Animals,
    AnimalViewer
  },
  methods: {
    handleSelect(animal) {
      this.selectedAnimal = animal;
    },
    handleUpdate(updated) {
      const index = this.animals.findIndex(animal => {
        return animal.key === updated.key;
      });

      if(index !== -1) {
        this.animals.splice(index, 1, updated);
        this.selectedAnimal = updated;
      }
    }
  }
};
</script>

<style>

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
