<template>
    <p>
      <label>
        size:
        <select v-model="selected" v-on:change="handleChange">
          <option value="">All sizes</option>
          <option v-for="size in sizes"
            v-bind:key="size"
            v-bind:value="size">
            {{ size }}
          </option>
        </select>
      </label>
      <label>
        weight:
        <input v-model.number="weight" type="number" v-on:keyup="handleChange">
      </label>
    </p>
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
      selected: '',
      weight: ''
    };
  },
  methods: {
    handleChange() {
      const filter = {
        size: this.selected,
        weight: this.weight
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>

</style>
