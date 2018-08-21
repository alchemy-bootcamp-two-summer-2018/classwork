<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        size:
        <select v-model="selected">
          <option value="">All sizes</option>
          <option v-for="size in sizes"
            v-bind:key="size"
            v-bind:value="size">
            {{ size }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <button>Apply</button>
    </p>
  </form>
</template>

<script>
import animalsApi from '../services/animalsApi';

export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      sizes: animalsApi.getSizes(),
      selected: ''
    };
  },
  methods: {
    handleSubmit() {
      const filter = {
        size: this.selected
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>

</style>
