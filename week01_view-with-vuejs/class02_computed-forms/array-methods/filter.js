
const numbers = [2, 14, 67, 32, 33];

// filter

console.log('old way using for');

const filtered = [];

for(let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if(number > 15) {
    filtered.push(number);
  }
}

console.log('using for loop', filtered);


const bigNumbers = numbers.filter((number) => {
  return number > 15;
})

console.log('using filter method', bigNumbers);