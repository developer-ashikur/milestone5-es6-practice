// object method property
const normalPerson = {
    firstName : 'Ashikur',
    lastName : 'Rahman',
    salary : 15000,
    getFullName : function(){
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
    chargeSalary : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// console.log(normalPerson.getFullName());
// console.log(normalPerson.chargeSalary(3000));
const heroPerson = {
    firstName : 'Hero',
    lastName : 'Alam',
    salary : 25000
};
const friendlyPerson = {
    firstName : 'Hero',
    lastName : 'Kalam',
    salary : 20000
};
const chargeSalaryHero = normalPerson.chargeSalary.bind(heroPerson);
console.log(chargeSalaryHero(3000));
const chargeSalaryFriend = normalPerson.chargeSalary.bind(friendlyPerson);
console.log(chargeSalaryFriend(1000));