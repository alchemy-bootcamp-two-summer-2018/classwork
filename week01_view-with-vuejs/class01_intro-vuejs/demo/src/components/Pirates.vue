<template>
  <div>
    <h3>Pirates Component</h3>
    <HelloWorld msg="My parent is the Pirates component"/>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld
  }
};

</script>

<style>

</style>