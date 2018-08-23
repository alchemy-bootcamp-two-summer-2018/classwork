<template>
  <div>
    <section v-if="animal">
      <p v-if="!editing">
        <button @click="editing = true">Edit</button>
      </p>

      <AnimalForm v-if="editing" 
        :animal="animal"
        :onUpdate="handleUpdate"
        :onCancel="handleEndEdit"
      />
      <AnimalDisplay v-else :animal="animal"/>  
    </section>

    <section v-else>
      <p>Please choose an animal</p>
    </section>
  </div>
</template>

<script>
import AnimalForm from './AnimalForm.vue';
import AnimalDisplay from './AnimalDisplay.vue';

export default {
  props: {
    animal: Object,
    onUpdate: Function
  },
  data() {
    return { 
      editing: false
    };
  },
  watch: {
    animal(newAnimal, oldAnimal) {
      if(newAnimal !== oldAnimal) {
        this.editing = false;
      }
    }
  },
  components: {
    AnimalForm,
    AnimalDisplay
  },
  methods: {
    handleEndEdit() {
      this.editing = false;
    },
    handleUpdate(animal) {
      this.onUpdate(animal);
      this.handleEndEdit();
    }
  }
};

</script>

<style>

</style>
