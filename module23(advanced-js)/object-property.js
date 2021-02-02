const students = [
    {id: 21, name: 'Omor Sunny'},
    {id: 31, name: 'Mannaaa'},
    {id: 41, name: 'Moyuri'},
    {id: 51, name: 'Deepjol'}
]
// const nameOfStudents = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const studentsName = element.name;
//     nameOfStudents.push(studentsName);
// }
// console.log(nameOfStudents);
const studentsName = students.map(x => x.name);
const weekStudents = students.filter(x => x.id > 30).map(y => y.name);
console.log(weekStudents);
console.log(studentsName);