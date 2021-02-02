// Array slice, splice, array join elements
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = numbers.slice(1, 5);

const remove = numbers.splice(0, 5, 55, 66);

const together = numbers.join(',');

console.log(remove);
console.log(numbers);
console.log(part);
console.log(together);