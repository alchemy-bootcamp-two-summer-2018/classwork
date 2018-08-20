<template>
  <section>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>some random content</p>
    <AddPirate v-bind:onAdd="handleAdd"/>
    <PirateList v-bind:pirates="pirates" v-bind:onRemove="handleRemove"/>
  </section>
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

<style scoped>

section {
  margin-top: 60px;
}

p {
  color: steelblue;
}

</style>
