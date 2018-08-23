<template>
  <ul class="tile-view">
    <Animal v-for="animal in animals"
      :key="animal.name"
      :animal="animal"
    />
  </ul>
</template>

<script>
import Animal from './Animal';

export default {
  props: {
    animals: Array
  },
  components: {
    Animal
  }
};
</script>

<style scoped>

ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>
