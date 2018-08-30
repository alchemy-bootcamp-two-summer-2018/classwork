<template>
<section>
  <h2>Add a new neighborhood</h2>
  <NeighborhoodForm 
    label="Add"
    :quadrants="quadrants"
    :onEdit="handleAdd"/>
</section>
</template>

<script>
import NeighborhoodForm from './NeighborhoodForm.vue';
import api from '../../services/api';

export default {
  components: { 
    NeighborhoodForm 
  },
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
  methods: {
    handleAdd(neighborhood) {
      return api.addNeighborhood(neighborhood)
        .then(() => {
          // TODO: change to "id
          this.$router.push(`/neighborhoods`);
        });
    }
  }
};

</script>

<style>

</style>
