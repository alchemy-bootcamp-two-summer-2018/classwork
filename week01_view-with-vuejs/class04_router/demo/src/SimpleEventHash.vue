<template>
  <div class="app">
    <header>
      <a href="#">Home</a>
      <a href="#hello">Hello</a>
      <a href="#penguins">Penguins</a>

    </header>
    <main v-if="page === '#hello'">
      <h1>Hello {{ name }}</h1>
    </main>
    <main v-else-if="page === '#penguins'">
      <h1>Look at all the penguins!</h1>
    </main>
    <main v-else>
      <h1>Home Page</h1>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    window.onhashchange = () => {
      this.page = window.location.hash;
    };
  },
  data() {
    return {
      name: 'Portland',
      page: window.location.hash
    };
  },
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
