<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/animals">Animals</router-link>
    </header>

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'app',
 
  methods: {
    handleUpdate(updated) {
      const index = this.animals.findIndex(animal => {
        return animal.key === updated.key;
      });

      if(index !== -1) {
        this.animals.splice(index, 1, updated);
        this.selectedAnimal = updated;
      }
    }
  }
};
</script>

<style>


</style>
