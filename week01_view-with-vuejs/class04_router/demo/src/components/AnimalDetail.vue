<template>
  <section v-if="animal">
    <h3>{{ animal.name }}</h3>
    <p>
      <router-link :to="`/animals/${animal.key}/edit`">Edit</router-link>
    </p>
    <p>{{ animal.size }} weighing {{ animal.weight }}</p>
    <p v-html="animal.description"></p>
  </section>
</template>

<script>
import animalsApi from '../services/animalsApi';

export default {
  data() {
    return {
      animal: null
    };
  },
  created() {
    this.animal = animalsApi.getAnimal(this.$route.params.key);
  }
};

</script>

<style>

</style>
