<template>
  <ul>
    <Animal v-for="animal in animals"
      :key="animal.name"
      :animal="animal"
      :selected="selected"
      :onSelect="onSelect"/>
  </ul>
</template>

<script>
import Animal from './Animal.vue';

export default {
  props: {
    animals: Array,
    selected: Object,
    onSelect: Function
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
