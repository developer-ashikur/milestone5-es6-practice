const person1 = {
    firstName : 'ashikur',
    lastName : 'rahman',
    age : 24,
    salary : 12000,
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person1.getFullName());
const person2 = {
    firstName : 'akter',
    lastName : 'hosen',
    age : 45
};
person2.fullName = person1.getFullName;
console.log(person2.fullName());
