import animalsApi from './services/animalsApi';

export default {
  name: 'app',
  template: `
  <div class="app">
    <main>
      Hello Vue
    </main>
  </div>
  `,
  data() {
    return {
      animals: animalsApi.getAnimals(),
      selectedAnimal: null
    };
  },
  components: {
  },
  methods: {
    handleSelect(animal) {
      this.selectedAnimal = animal;
    },
    handleUpdate(updated) {
      const index = this.animals.findIndex(animal => {
        return animal.key === updated.key;
      });

      if(index !== -1) {
        this.animals.splice(index, 1, updated);
        this.selectedAnimal = updated;
      }
    }
  },
  styles: `
    .app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
  `
};