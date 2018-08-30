<template>
<section>
  <h2>Portland Neighborhoods</h2>
  <p v-if="!neighborhoods">Loading neighborhoods...</p>
  <ul v-else class="list">
    <li
      v-for="neighborhood in neighborhoods"
      :key="neighborhood.id">
      <router-link :to="`/neighborhoods/${neighborhood.id}`">
        {{neighborhood.name}} - {{neighborhood.quadrant}}
      </router-link>
    </li>
  </ul>
  <p>
    <router-link to="/neighborhoods/add">Add a new neighborhood</router-link>
  </p>
</section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return { 
      neighborhoods: null
    };
  },
  created() {
    api.getNeighborhoods()
      .then(neighborhoods => {
        this.neighborhoods = neighborhoods;
      });
  }
};

</script>

<style scoped>

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: initial;
}

</style>
