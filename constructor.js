// const Person = function(name, age) {
//   this.firstName = name;
//   this.age = age;
//   this.birthYear = 2025 - age;
// };

// Person.prototype.introduce = function() {
//     console.log('Hello! my name is ' + this.firstName + ' and I am ' + this.age + ' years old, I was born in ' + this.birthYear+'.');
// }

// const Person1 = new Person("Radhe", 22);
// console.log(Person1);
// Person1.introduce();


class Person {
    constructor(name, age) {
        this.firstName = name;
        this.age = age;
        this.birthYear = 2025 - age;
    }
    introduce() {
        console.log('Hello! my name is ' + this.firstName + ' and I am ' + this.age + ' years old, I was born in ' + this.birthYear + '.');
    }
}
let person1 = new Person("Arun", 20);
person1.introduce();


