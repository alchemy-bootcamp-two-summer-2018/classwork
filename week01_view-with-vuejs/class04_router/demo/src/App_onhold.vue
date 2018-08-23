<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/hello">Hello</router-link>
      <router-link to="/penguins">Penguins</router-link>

    </header>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app'
};

</script>

<style>

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

a {
  margin: 5px;
}
</style>
