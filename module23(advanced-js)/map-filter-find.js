// map, filter, find
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const square = numbers.map(x => x * x);
const evenNumbers = numbers.filter(x => x % 2 === 0);
const evenNumbersFind = numbers.find(x => x % 2 === 0);
console.log(evenNumbersFind);
console.log(evenNumbers);
console.log(square);