<template>
  <form @submit.prevent="handleSubmit">
    <FormControl label="Your Name">
      <input aria-label="Your Name" name="name" v-model="name"/>
    </FormControl>
    
    <FormControl label="Your Name">
      <input aria-label="Where You Live" name="place" v-model="place"/>
    </FormControl>
    
    <FormControl label="Which Animals">
      <input type="checkbox" name="animals" value="cats" v-model="animals">
        cats
      <input type="checkbox" name="animals" value="dogs" v-model="animals">
        dogs
    </FormControl>

    <!-- <p>
        <label>
          <span class="label">Which do you love?</span>
          <input type="checkbox" name="animals" value="cats" v-model="animals">
          cats
          <input type="checkbox" name="animals" value="dogs" v-model="animals">
          dogs
        </label>
    </p> -->
    <p>
      <button>Submit</button>
    </p>
  </form>
</template>

<script>
import FormControl from './FormControl';

export default {
  data() {
    return {
      name: 'fred',
      place: 'portland',
      animals: []
    };
  },
  components: {
    FormControl
  },
  methods: {
    handleSubmit() {
      console.log(this.name, this.place, this.animals);
    }
  }
};

</script>

<style scoped>

form {
  border: 1px solid black;
  background: #aaa;
  padding: 10px;
}


</style>
