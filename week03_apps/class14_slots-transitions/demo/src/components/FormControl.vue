<template>
  <p>
    <label>{{ label }}</label>
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    label: String
  }
};
</script>

<style scoped>

label {
  font-weight: bold;
  display: block;
  margin: 10px 0;
}

</style>
