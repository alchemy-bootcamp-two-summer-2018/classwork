
const numbers = [2, 14, 67, 32, 33];

// map

console.log('old way using for loop');

const mapped = [];

for(let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  mapped.push(number ** 2);
}

console.log('using map');

const squares = numbers.map((number) => {
  return number * number;
})

console.log(squares);