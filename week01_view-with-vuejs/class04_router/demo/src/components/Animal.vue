<template>
  <li>
    <router-link :to="`/animals/${animal.key}`">
      <h3>{{ animal.name }}</h3>
      <p>size: {{ animal.size }}</p>
      <p>weight: {{ animal.weight }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    animal: Object,
    selected: Object,
    onSelect: Function
  },
  methods: {
    handleClick() {
      this.onSelect(this.animal);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}

a {
  text-decoration: none;
  color: initial;
}

.selected {
  background: lightsteelblue;
}
</style>
