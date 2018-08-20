<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld 
      v-bind:msg="msg"
      foo="here is foo"
    />
    <button v-on:click="handleClick">Change Message</button>
    <Pirates/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Pirates from './components/Pirates.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'App message for Hello World'
    };
  },
  components: {
    HelloWorld,
    Pirates
  },
  methods: {
    handleClick() {
      this.msg = 'The new message';
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
