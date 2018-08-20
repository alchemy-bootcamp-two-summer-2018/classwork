<template>
  <li>
      <h3 v-bind:class="{ captain: pirate.role === 'captain' }">{{ pirate.name }}</h3>
      <p v-if="pirate.role === 'captain'">
        <strong>Captain of the {{ pirate.crew}}</strong>
      </p>
      <p v-else>{{ pirate.role }} of {{ pirate.crew }}</p>

      <p>
        <button v-on:click="onRemove(pirate)">remove this pirate</button>
      </p>
  </li>
</template>

<script>
export default {
  props: {
    pirate: Object,
    onRemove: Function
  }
};

</script>

<style scoped>

</style>
