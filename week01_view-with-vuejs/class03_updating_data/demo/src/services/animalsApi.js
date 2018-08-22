
const animals = [
  {
    key: 'cat',
    name: 'cat',
    size: 'small',
    weight: 5
  },
  {
    key: 'rat',
    name: 'rat',
    size: 'small',
    weight: 1
  },
  {
    key: 'bird',
    name: 'bird',
    size: 'small',
    weight: 1
  },
  {
    key: 'dog',
    name: 'dog',
    size: 'small',
    weight: 10
  },
  {
    key: 'lion',
    name: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    key: 'elk',
    name: 'elk',
    size: 'medium',
    weight: 750
  },
  {
    key: 'elephant',
    name: 'elephant',
    size: 'big',
    weight: 5000
  },
  {
    key: 'whale',
    name: 'whale',
    size: 'big',
    weight: 10000,
    description: 'Really <strong>big</strong> animal'
  }
];

const allSizes = animals.map(animal => {
  return animal.size;
});

const seen = {};

const sizes = allSizes.filter(size => {
  if(seen[size]) return false;
  seen[size] = true;
  return true;
});

export default {
  getAnimals() {
    return animals;
  },
  getSizes() {
    return sizes;
  }
};