<template>
  <div>
    <button class="big" @click="show = !show">
      Toggle
    </button>
    <transition name="fly" mode="out-in">
      <p key="1" v-if="show">hello</p>
      <p key="2" v-else>goodbye</p>
    </transition>

    <hr>
    
    <transition-group tag="ul" name="fade">
      <li v-for="(animal, index) in animals"
        :key="animal.name">
        <!-- :style="{ transitionDelay: (index * 200) + 'ms' }" -->
        {{ animal.name }} the {{ animal.type }}
        <button @click="handleRemove(animal)">x</button>
      </li>
    </transition-group>

    <button @click="handleAdd">add</button>
    <button @click="handleReverse">reverse</button>
    <button @click="handleRank">rank</button>
    <button @click="handleOverlay">overlay</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: true,
      color: 'steelblue',
      num: 1,
      animals: [
        { name: 'Cub', type: 'dog' },
        { name: 'Pebbles', type: 'dog' },
        { name: 'Fred', type: 'lizard' }
      ]
    };
  },
  methods: {
    handleRemove(animal) {
      // this.animals = this.animals.filter(a => a !== animal);
      const index = this.animals.indexOf(animal);
      if(index !== -1) {
        this.animals.splice(index, 1);
      }
    },
    handleAdd() {
      this.animals.push({
        name: `name ${this.num++}`,
        type: 'dog'
      });
    },
    handleReverse() {
      this.animals.reverse();
    },
    handleRank() {
      const newNumberOne = this.animals.splice(-2, 1)[0];
      this.animals.splice(0, 0, newNumberOne);
    },
    handleOverlay() {
      const newAnimals = [
        { name: 'felix', type: 'cat' },
        { name: 'garfield', type: 'cat' },
        { name: 'Cub', type: 'dog' },
        { name: 'larry', type: 'lizard' },
        { name: 'Pebbles', type: 'dog' },
        { name: 'tweety', type: 'bird' },
        { name: 'gecko', type: 'lizard' }
      ];
      this.animals = newAnimals;
    }
  } 
};
</script>

<style>

div {
  height: 300px; 
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg) translateX(10px);

  }
  100% {
    transform: rotateZ(180deg) translateX(-100px);
  }
}

button.big {
  height: 30px;
  width: 100px;
  background: ghostwhite;
}

button.transitioned {
  opacity: .8;
  transition: all 500ms cubic-bezier(0.33,-0.47, 0.57, 1.61);
}

button.animated {
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

button:hover {
  background: steelblue;
  opacity: 1;
  transform: scale(1.2, 1.2);
}



</style>

