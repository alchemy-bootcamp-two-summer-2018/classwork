<template>
  <main>
    <h2>Animals</h2>
    
    <p>
      <router-link to="/animals/add">Add a new animal</router-link>
    </p>

    <p>
      <router-link to="/animals/tile">Tile View</router-link>
      <router-link to="/animals/list">List View</router-link>
    </p>

    <router-view :animals="animals"></router-view>

  </main>
</template>

<script>
import animalsApi from '../services/animalsApi';

export default {
  data() {
    return {
      animals: animalsApi.getAnimals()
    };
  },
  components: {
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
