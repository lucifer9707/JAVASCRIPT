// //1
// var name = "Alice";
// var name = "Bob";
// console.log(name); // Output: Bob
//2
////const sum = (num1, num2) => num1 + num2;

//3 
// //Create an arrow function with a parameter that returns true if number i odd else false using implicit return  
// const isOdd = num => num % 2 !== 0;
// console.log(isOdd(3));

//4

// //Convert to arrow functions

// // function greet(name) {
// //     return "Hello, " + name + "!";
// // }

// const greet = name => "Hello, " + name + "!";
// console.log(greet("Alice"));

// //function add(a, b) {
// //     return a + b;
// // }

// const add = (a, b) => a + b;
// console.log(add(2, 3));

// //function isEven(num) {
// //     return num % 2 === 0;
// // }

// const isEven = num => num % 2 === 0;
// console.log(isEven(4));

// //5
// //use arrows with arrays

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log(squares); // Output: [1, 4, 9, 16, 25]



// //6
// const name = "Riya";
// const age = 21;
// console.log(`My name is ${name} and I am ${age} years old, I was born in the year ${2025 - age}.`);



//7 template literals

// const product = "laptop";
// const price = 66000;
// const message = `You bought a ${product} for ₹${price}.`;
// console.log(message);


// //8
// const person = {
//     firstName : "Arun",
//     lastName  : "Rawat",
//     age : 20,
//     introduce : function() {
//         console.log(`Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
//     }
// };
// console.log(person.firstName);
// console.log(person.lastName);
// person.introduce();

//OR

// const person = {
//    firstName : "Arun",
//      lastName  : "Rawat",
//      age : 20,
//      introduce : function() {
//          console.log(`Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
//      }
//  };

//  person.birthYear = 2025 - person.age;
//  console.log(`hi i was born in the year ${person.birthYear}`);
 
//  console.log(person.birthYear);

// //9
// // const fruits = ["apple", "banana", "kiwi", "mango"];

// // const [firstFruit, secondFruit] = fruits;
// // console.log(firstFruit, secondFruit);

// const boys = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const [ , secondboy, , , fifthboy] = boys;
// console.log(secondboy, fifthboy); 



// //10
// const person = {
//     name: "Kapil",
//     age: 25,
// };

// const { name : firstName, age : umr } = person;

// console.log(firstName);
// console.log(umr);


//11 Rest operator
// const arr = [1,2,3,4,5,6,7,8,9];

// const [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);
// console.log(arr);


// //12 Spread operator
// const arr = [1,2,3,4,5,6,7,8,9];
// const arr2 = [10,11,12,13];

// const result = [...arr, ...arr2];
// console.log(result);

// //13

// const name = "Arun";
// const age = 20;

// const person = { 
//     name: name,
//     age: age,
// };
// console.log(person);

//OR in ES6 we can write it like this when the key and value names are same


// //14

// console.log(20);
// console.log(30);
// console.log(40);
// setTimeout(() => console.log("hello"), 5000); //after 5 seconds
// console.log(50);

//15
// let count = 1;
// const timer = setInterval(() => {
//     console.log("Hello " + count);
//     count++;
//     if(count > 5) {
//         clearInterval(timer);
//     }
// }, 1000); //prints hello every 1 second 

//16 
let count = 10;
const timer = setInterval(() => {
    console.log("Hello: " + count);
    count--;
    if(count < 0) {
        clearInterval(timer);
        console.log("Liftoff!");
    }
}, 1000); //counts down from 10 to 0 every 1 second

