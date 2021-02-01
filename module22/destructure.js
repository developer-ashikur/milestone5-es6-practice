// Destructure, Object, array, destructure complex object
const person = {
    name: 'ashikur',
    age: 24,
    education: {
        institute: 'ju',
        year: '3rd'
    },
    department: 'zoology',
    hall: 'MBH' 
}
const { age, education, department } = person;
const { institute, year } = person.education;
console.log(institute, year);
console.log(age, education, department);

const friends = ['alam', 'molom', 'dada', 'dady', 'dadu'];
const  [first, worstF, ...valoFriends]  = friends;
console.log(valoFriends);