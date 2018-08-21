
const numbers = [2, 14, 67, 32, 33];

console.log('chaining map and filter ');

const bigSquares = numbers
  .map(number => {
    return number * number
  })
  .filter(square => {
    return square > 3000
  });

console.log(bigSquares);

console.log('chaining filter and map');

const squareOfBigNumbers = numbers
  .filter(number => {
    return number > 15
  })
  .map(number => {
    return number * number
  });

console.log(squareOfBigNumbers);