<template>
  <ul class="list-view">
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

ul.list-view {
  display: block;
  text-align: left;
}

ul.list-view li {
  text-align: left;
  border: none;
}

</style>
