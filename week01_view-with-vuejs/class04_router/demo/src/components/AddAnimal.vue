<template>
  <AnimalForm :onComplete="handleAdd"/>
</template>

<script>
import AnimalForm from './AnimalForm.vue';
import animalsApi from '../services/animalsApi';

export default {
  components: {
    AnimalForm
  },
  methods: {
    handleAdd(animal) {
      const added = animalsApi.addAnimal(animal);
      this.$router.push(`/animals/${added.key}`);
    }
  }
};
</script>

<style>

</style>
