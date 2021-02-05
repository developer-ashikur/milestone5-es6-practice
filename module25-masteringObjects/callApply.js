// object method property
const normalPerson = {
    firstName : 'Ashikur',
    lastName : 'Rahman',
    salary : 15000,
    getFullName : function(){
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
    chargeSalary : function(amount, tips = 0, tax=0){
        this.salary = this.salary - amount - tips - tax;
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
// const chargeSalaryHero = normalPerson.chargeSalary.bind(heroPerson);
// console.log(chargeSalaryHero(3000));
// const chargeSalaryFriend = normalPerson.chargeSalary.bind(friendlyPerson);
// console.log(chargeSalaryFriend(1000));

// normalPerson.chargeSalary.call(heroPerson, 2000);
// console.log(heroPerson.salary);

// normalPerson.chargeSalary.call(friendlyPerson, 3000, 300, 30);
// console.log(friendlyPerson.salary);

normalPerson.chargeSalary.apply(heroPerson, [2000, 200, 20]);
console.log(heroPerson.salary);

normalPerson.chargeSalary.apply(friendlyPerson, [1000, 100, 10]);
console.log(friendlyPerson.salary);