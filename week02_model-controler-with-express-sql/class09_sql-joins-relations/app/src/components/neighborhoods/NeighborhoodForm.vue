<template id="neighborhood-template">
  <section class="neighborhood-form-container">
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label>
        Quadrant:
        <select v-model.number="edit.quadrantId" required>
          <option disabled value="">Please select a quadrant</option>
          <option
            v-for="quadrant in quadrants"
            :key="quadrant.id"
            :value="quadrant.id">
            {{quadrant.name}} ({{quadrant.direction}})
          </option>
        </select>
      </label>

      <label>
        Population:
        <input type="number" name="population" placeholder="Population" required
          v-model.number="edit.population">
      </label>

      <label>
        Founded:
        <input type="number" name="founded" placeholder="Founded" required
          v-model.number="edit.founded">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="edit.description"></textarea>
      </label>
      
      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
    {{ edit }}
  </section>
</template>

<script>

const initNeigborhood = () => {
  return {
    name: '',
    population: '',
    founded: '',
    description: ''
  };
};

export default {
  props: {
    neighborhood: Object,
    label: String,
    quadrants: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.neighborhood ? Object.assign({}, this.neighborhood) : initNeigborhood()
    };
  },
  computed: {
    editMode() {
      return !!this.neighborhood;
    }
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.edit = initNeigborhood();
        });
    }
  }
};

</script>

<style>

.neighborhood-form-container {
  width: 300px;
  text-align: left;
  margin: auto;
}

label {
  display: block;
}
</style>
