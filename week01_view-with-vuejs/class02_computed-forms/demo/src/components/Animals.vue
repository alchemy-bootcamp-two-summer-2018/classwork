<template>
  <ul>
    <Animal v-for="animal in sortedAnimals"
      v-bind:key="animal.name"
      v-bind:animal="animal"/>
  </ul>
</template>

<script>
import animalsApi from '../services/animalsApi';
import Animal from './Animal.vue';

export default {
  props: {
    filter: Object,
    sort: Object
  },
  data() {
    return {
      animals: animalsApi.getAnimals()
    };
  },
  computed: {
    filteredAnimals() {
      const { size, weight } = this.filter;
      if(!size && (weight || 0) <= 0) return this.animals;

      return this.animals.filter(animal => {
        return (
          (!size || animal.size === size) &&
          (!weight || animal.weight > weight)
        );
      });
    },
    sortedAnimals() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'name';
      }

      return this.filteredAnimals.slice().sort((a, b) => {
        if(a[sort] > b[sort]) return 1 * direction;
        if(b[sort] > a[sort]) return -1 * direction;
        if(b[sort] === a[sort]) return 0;
      });

    }
  },
  components: {
    Animal
  }
};
</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>
