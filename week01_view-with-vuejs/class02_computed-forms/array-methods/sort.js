
const letters = ['z', 'd', 'r', 'a', 'm'];

letters.sort();

console.log('sorted letters', letters);

const numbers = [2, 14, 67, 32, 33];

console.log('sorted numbers?', numbers.slice().sort());

numbers.sort((a, b) => {
  return a - b
});

console.log('sorted numbers!', numbers);

const cats = [
  { name: 'felix', type: 'tuxedo' },
  { name: 'duchess', type: 'persian' },
  { name: 'garfield', type: 'orange tabby' },
];

// full way
const sortedCats = cats.slice().sort((a, b) => {
  if(b.name === a.name) return 0;
  if(a.name > b.name) return 1;
  if(b.name < a.name) return -1;
});

console.log('sorted cats by name', sortedCats);

// dynamic sort
let prop = 'name';

const dynamicSortedCats = cats.slice().sort((a, b) => {
  if(a[prop] > b[prop]) return 1;
  if(b[prop] < a[prop]) return -1;
  if(b[prop] === a[prop]) return 0;
});

console.log('cats sorted by prop', dynamicSortedCats);
