//  Inheritance, extends class, super, class method
class Parent{
    constructor() {
        this.fatherName = 'rahman';
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}

const baby = new Child('ashikur');
const baby2 = new Child('jillur');
console.log(baby.getFullName());