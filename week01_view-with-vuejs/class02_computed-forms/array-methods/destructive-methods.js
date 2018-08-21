
const numbers = [2, 14, 67, 32, 33];

// use these, but realize they change the source array
// NOTICE .slice()

const reversed = numbers.slice().reverse();
console.log('reverse', reversed, numbers);

const sorted = numbers.slice().sort((a, b) => a - b);
console.log('sorted', sorted, numbers);

const desSorted = numbers.slice().sort((a, b) => b - a);
console.log('desSorted', desSorted, numbers);