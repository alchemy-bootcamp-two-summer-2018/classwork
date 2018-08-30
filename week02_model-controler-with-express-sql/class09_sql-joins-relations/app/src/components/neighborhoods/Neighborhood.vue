<template id="neighborhood-template">
  <div v-if="neighborhood">
    <article v-if="!editing">
      <h3>{{ neighborhood.name }}</h3>
      <p v-if="quadrant">Quadrant: {{ quadrant.name }} ({{ quadrant.direction }})</p>
      <p>Founded: {{ neighborhood.founded }}</p>
      <p class="population">
        Current population: 
        <strong>{{ population }}</strong> 
      </p>
      <p class="population">
        <span class="size">(a <em>{{ size }}</em> neighborhood)</span>
      </p>
      <p>
        <button @click="handleRemove">remove this neighborhood</button>
      </p>
    </article>
    <NeighborhoodForm 
      v-else 
      label="Update"
      :neighborhood="neighborhood"
      :quadrants="quadrants"
      :onEdit="handleUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
  </div>
</template>

<script>
import NeighborhoodForm from './NeighborhoodForm';
import api from '../../services/api';

export default {
  props: {
    quadrants: Array
  },
  data() {
    return {
      neighborhood: null,
      editing: false
    };
  },
  components: {
    NeighborhoodForm
  },
  created() {
    api.getNeighborhood(this.$route.params.id)
      .then(neighborhood => {
        this.neighborhood = neighborhood;
      });
  },
  computed: {
    quadrant() {
      if(!this.neighborhood || !this.quadrants) {
        return null;
      }

      const { quadrantId } = this.neighborhood;
      return this.quadrants.find(q => q.id === quadrantId);
    },
    population() {
      return this.neighborhood.population.toLocaleString();
    },
    size() {
      return this.neighborhood.population > 20000 ? 'big' : 'small';
    }
  },
  methods: {
    handleRemove() {
      if(!confirm(`Are you sure you want to remove ${this.neighborhood.name}?`)) {
        return;
      }

      return api.removeNeighborhood(this.neighborhood.id)
        .then(() => {
          this.$router.push('/neighborhoods');
        });
    },
    handleUpdate(toUpdate) {
      return api.updateNeighborhood(toUpdate)
        .then(updated => {
          this.neighborhood = updated;
          this.editing = false;
        });
    }
  }
};

</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}

</style>
