<template>
  <section>
    <h3>{{ animal.name }}</h3>
    <p>{{ animal.size }} weighing {{ animal.weight }}</p>
    <p v-html="animal.description"></p>
  </section>
</template>

<script>

export default {
  props: {
    animal: Object
  }
};

</script>

<style>

</style>
