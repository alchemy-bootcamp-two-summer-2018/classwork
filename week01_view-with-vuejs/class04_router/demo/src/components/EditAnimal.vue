<template>
  <AnimalForm v-if="animal"
    :animal="animal"
    :onComplete="handleUpdate"
    :onCancel="backToDetail"
  />
</template>

<script>
import AnimalForm from './AnimalForm.vue';
import animalsApi from '../services/animalsApi';

export default {
  components: {
    AnimalForm
  },
  data() {
    return {
      animal: null
    };
  },
  created() {
    this.animal = animalsApi.getAnimal(this.$route.params.key);
  },
  methods: {
    handleUpdate(animal) {
      animalsApi.updateAnimal(animal);
      this.backToDetail();
    },
    backToDetail() {
      this.$router.push(`/animals/${this.animal.key}`);
    }
  }
};
</script>

<style>

</style>
