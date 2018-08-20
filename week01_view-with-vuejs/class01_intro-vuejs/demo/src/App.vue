<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddPirate v-bind:onAdd="handleAdd"/>
    <PirateList v-bind:pirates="pirates" v-bind:onRemove="handleRemove"/>
  </div>
</template>

<script>
import PirateList from './components/PirateList.vue';
import AddPirate from './components/AddPirate.vue';
import pirates from './pirates';

export default {
  name: 'app',
  data() {
    return { pirates };
  },
  components: {
    AddPirate,
    PirateList
  },
  methods: {
    handleAdd(pirate) {
      this.pirates.push(pirate);
    },
    handleRemove(pirate) {
      const index = this.pirates.indexOf(pirate);
      if(index !== -1) {
        this.pirates.splice(index, 1);
      }
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
