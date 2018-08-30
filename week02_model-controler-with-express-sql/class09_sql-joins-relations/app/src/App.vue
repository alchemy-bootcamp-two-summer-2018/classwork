<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/neighborhoods">Neighborhoods</router-link>
      </nav>
    </header>

    <main>
      <router-view :quadrants="quadrants"></router-view>
    </main>
  </div>
</template>

<script>
import api from './services/api';

export default {
  data() {
    return {
      quadrants: null
    };
  },
  created() {
    api.getQuadrants()
      .then(quadrants => {
        this.quadrants = quadrants;
      });
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header img {
  width: 100px;
}

nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}

main {
  padding: 8px;
}



</style>
