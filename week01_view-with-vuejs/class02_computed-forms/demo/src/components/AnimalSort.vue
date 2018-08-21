<template>
  <form v-on:submit.prevent="handleSubmit">
    <select v-model="sort">
      <option value="name">Name</option>
      <option value="size">Size</option>
      <option value="weight">Weight</option>
    </select>
    <label>
      <input type="radio" value="1" name="direction" v-model="direction"> asc
    </label>
    <label>
      <input type="radio" value="-1" name="direction" v-model="direction"> desc
    </label>
    <button>Apply Sort</button>
  </form>
</template>

<script>
export default {
  props: {
    onSort: Function
  },
  data() {
    return {
      sort: 'name',
      direction: 1
    };
  },
  methods: {
    handleSubmit() {
      this.onSort({
        sort: this.sort, 
        direction: this.direction
      });
    }
  }
};

</script>

<style>

</style>
