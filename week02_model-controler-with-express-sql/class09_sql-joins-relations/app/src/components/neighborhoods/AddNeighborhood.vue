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
  props: {
    quadrants: Array
  },
  methods: {
    handleAdd(neighborhood) {
      return api.addNeighborhood(neighborhood)
        .then(added => {
          this.$router.push(`/neighborhoods/${added.id}`);
        });
    }
  }
};

</script>

<style>

</style>
