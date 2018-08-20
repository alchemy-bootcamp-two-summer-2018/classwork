<template>
  <div>
    <h2>Pirates</h2>
    <ul>
      <Pirate v-for="pirate in pirates"
        v-bind:key="pirate.name"
        v-bind:pirate="pirate"
        v-bind:onRemove="onRemove"
      />
    </ul>
  </div>
</template>

<script>
import Pirate from './Pirate.vue';

export default {
  props: {
    pirates: Array,
    onRemove: Function
  },
  components: {
    Pirate
  }
};

</script>

<style>

</style>