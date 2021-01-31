const doubleIt = function (num) {
    return num * 2;
}
// arrow function
const doubleIt2 = num => num * 2;
const add = (num1, num2) => num1 + num2;
const give5 = () => 5;
// multiline arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const result = sum * difference;
    return result;
}
const result = doMath(100, 50);
console.log('result', result);