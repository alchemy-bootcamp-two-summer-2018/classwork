import shortid from 'shortid';
import data from './data';

if(!data.animals) {
  data.animals = [
    {
      key: shortid.generate(),
      name: 'cat',
      size: 'small',
      weight: 5
    },
    {
      key: shortid.generate(),
      name: 'rat',
      size: 'small',
      weight: 1
    },
    {
      key: shortid.generate(),
      name: 'bird',
      size: 'small',
      weight: 1
    },
    {
      key: shortid.generate(),
      name: 'dog',
      size: 'small',
      weight: 10
    },
    {
      key: shortid.generate(),
      name: 'lion',
      size: 'medium',
      weight: 150
    },
    {
      key: shortid.generate(),
      name: 'elk',
      size: 'medium',
      weight: 750
    },
    {
      key: shortid.generate(),
      name: 'elephant',
      size: 'big',
      weight: 5000
    },
    {
      key: shortid.generate(),
      name: 'whale',
      size: 'big',
      weight: 10000,
      description: 'Really <strong>big</strong> animal'
    }
  ];
}

export default {
  getAnimals() {
    return data.animals;
  },
  getAnimal(key) {
    return data.animals.find(animal => animal.key === key);
  },
  addAnimal(animal) {
    animal.key = shortid.generate();
    data.animals.push(animal);
    return animal;
  },
  updateAnimal(updated) {
    const index = data.animals.findIndex(animal => {
      return animal.key === updated.key;
    });

    if(index !== -1) {
      data.animals.splice(index, 1, updated);
    }
  },
  getSizes() {
    return ['small', 'medium', 'big'];
  }
};