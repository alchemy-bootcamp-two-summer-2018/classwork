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
      <button type="submit">{{ isNew ? 'Add' : 'Update' }}</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    animal: Object,
    onComplete: Function,
    onCancel: Function
  },
  data() {
    return {
      key: '',
      name: '',
      size: '',
      weight: '',
      description: ''
    };
  },
  computed: {
    isNew() {
      return this.animal === undefined;
    }
  },
  created() {
    const animal = this.animal;
    if(this.isNew) return;

    this.name = animal.name;
    this.size = animal.size;
    this.weight = animal.weight;
    this.description = animal.description;
  },
  methods: {
    handleSubmit() {
      const animal = {
        name: this.name,
        size: this.size,
        weight: this.weight,
        description: this.description
      };
      if(!this.isNew) {
        animal.key = this.animal.key;
      }

      this.onComplete(animal);
    }
  }
};

</script>

<style>

</style>
