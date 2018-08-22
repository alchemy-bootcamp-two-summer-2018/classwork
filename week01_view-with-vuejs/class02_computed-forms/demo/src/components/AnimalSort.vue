<template>
  <section>
    <select v-model="sort" v-on:change="handleChange">
      <option value="name">Name</option>
      <option value="size">Size</option>
      <option value="weight">Weight</option>
    </select>
    <label>
      <input type="radio" value="1" 
        name="direction" v-model="direction"
        v-on:change="handleChange"> asc
    </label>
    <label>
      <input type="radio" value="-1" name="direction" 
        v-model="direction"
        v-on:change="handleChange"> desc
    </label>
  </section>
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
    handleChange() {
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
