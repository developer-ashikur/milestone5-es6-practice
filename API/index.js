const student = {
    name: 'abir',
    id: 12,
    year: '3rd',
    girlFriend: {
        name: 'omuk',
        district: 'barisal',
        favFood: 'vat'
    },
    friends: ['alam', 'molom', 'kolom'],
    friendsAge: [12, 13, 15, 14, 11, 13]
}
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentsInfo = JSON.parse(studentJSON);
console.log(studentsInfo);