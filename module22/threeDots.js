const ages = [12, 14, 15, 17, 11, 18];
const ages2 = [32, 34, 54, 64, 43];
const ages3 = [32, 65, 56, 45, 43, 55, 96];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
//  Spread operator, concatenate multiple arrays, array max
const allAges2 = [...ages, ...ages2, 75, ...ages3];

const oldest = Math.max(...allAges2);
console.log(oldest);