
const numbers = [2, 14, 67, 32, 33];

// forEach

console.log('old way using for');

for(let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

console.log('using forEach');

numbers.forEach((number) => {
  console.log(number);
});