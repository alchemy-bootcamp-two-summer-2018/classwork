<template>
<section>
  <h2>Portland Neighborhoods</h2>
  <p v-if="!neighborhoods">Loading neighborhoods...</p>
  <ul v-else class="list">
    <Neighborhood
      v-for="(neighborhood, index) in neighborhoods"
      :key="index"
      :neighborhood="neighborhood"
    />
  </ul>
  <AddNeighborhood :on-add="handleAdd"/>
</section>
</template>

<script>
import Neighborhood from './Neighborhood';
import AddNeighborhood from './AddNeighborhood.vue';
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
  },
  components: { 
    Neighborhood,
    AddNeighborhood 
  },
  methods: {
    handleAdd(neighborhood) {
      return api.addNeighborhood(neighborhood)
        .then(saved => {
          this.neighborhoods.push(saved);
        });
    }
  }
};

</script>

<style>

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>
