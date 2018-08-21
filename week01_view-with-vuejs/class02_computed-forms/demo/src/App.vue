<template>
  <div id="app">
    <header>
      <AnimalFilter v-bind:onFilter="handleFilter"/>
      <AnimalSort v-bind:onSort="handleSort"/>
    </header>
    <main>
      <Animals v-bind:filter="filter"
        v-bind:sort="sort"/>
    </main>
  </div>
</template>

<script>
import Animals from './components/Animals.vue';
import AnimalFilter from './components/AnimalFilter.vue';
import AnimalSort from './components/AnimalSort.vue';

export default {
  name: 'app',
  data() {
    return {
      filter: {
        size: ''
      },
      sort: {
        sort: 'name',
        direction: 1
      }
    };
  },
  components: {
    Animals,
    AnimalFilter,
    AnimalSort
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    handleSort(sort) {
      this.sort = sort;
    }
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
