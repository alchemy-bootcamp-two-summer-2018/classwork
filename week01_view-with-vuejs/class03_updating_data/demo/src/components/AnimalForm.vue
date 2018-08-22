<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>
        Name: <input v-model="name">
      </label>
    </p>
    <p>
      <label>
        Size: <input v-model="size">
      </label>
    </p>
    <p>
      <label>
        Weight: <input v-model.number="weight">
      </label>
    </p>
    <p>
      <label>
        Decription: <textarea v-model="description"></textarea>
      </label>
    </p>
    <p>
      <button type="submit">Update</button>
      <button type="cancel" @click="onCancel">Cancel</button>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    animal: Object,
    onUpdate: Function,
    onCancel: Function
  },
  data() {
    return {
      name: '',
      size: '',
      weight: '',
      description: ''
    };
  },
  created() {
    const animal = this.animal;
    this.name = animal.name;
    this.size = animal.size;
    this.weight = animal.weight;
    this.description = animal.description;
  },
  methods: {
    handleSubmit() {
      const animal = {
        key: this.animal.key,
        name: this.name,
        size: this.size,
        weight: this.weight,
        description: this.description
      };
      this.onUpdate(animal);
    }
  }
};

</script>

<style>

</style>
