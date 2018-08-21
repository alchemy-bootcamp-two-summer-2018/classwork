
const numbers = [2, 14, 67, 32, 33];

// forEach

console.log('old way using for');

for(let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

console.log('using forEach');

const result = numbers.forEach((number, i) => {
  console.log(number, i);
});


const cats = [
  { name: 'felix', type: 'tuxedo' },
  { name: 'duchess', type: 'persian' },
  { name: 'garfield', type: 'orange tabby' },
];

cats.forEach(cat => {
  cat.name = cat.name + '!';
});

console.log('cats!', cats);