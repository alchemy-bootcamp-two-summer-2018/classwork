<template>
  <div class="dashboard">
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
  name: 'dashboard',
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


</style>
