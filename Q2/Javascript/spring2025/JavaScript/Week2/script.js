// Functions in JavaScript!

// console.log("hello"); //log is a predefined functions...Math.random()...predefined

// Function Declarations

// foo() is a function that neither accepts a parameter NOR it returns anything
// function foo() {}

// // square() is afunction that accepts one parameter and returns one value
// function square(a) {
//   return a * a;
// }

// // add() accepts two parameters and returns their sum
// function add(a, b) {
//   return a + b;
// }
// // if a function explicity does not return any thing... I ALWAYS return "undefined"

// console.log(foo()); //calling foo function
// console.log(square(5)); //calling square function
// console.log(add(5, 4)); //calling add function

// function add(a, b) {
//   console.log(a + b);
//   //   return a - b;
// }

// console.log(add(5, 4));

// let x = y+10;

// 2. Function Expressions

// let foo = function () {}; // Anonymous function! function () ... ??? no name here...
// let square = function (a) {
//   return a * a;
// };

// let add = function (a, b) {
//   return a + b;
// };

// console.log(square(4));
// console.log(typeof square);

// 3. Arrow Functions (ES5 ES6)

// let foo = () => {}; // Arrow function..of same foo expression function
// let square = (a) => a * a;

// // let square = a => a * a; //if you something like this.. YOU ARE GOOD...
// // In C#, square functions are called "Lambda Functions" N.B:
// // let add1 = (a, b) => {
// //   let c = a + b;
// //   return c;
// // };

// let add = (a, b) => a + b;

// Parameters and Arguments!

// function myLog(a) {
//   console.log(a);
// }

// myLog("Correct");
// myLog("Something", "Also", "Correct");
// myLog();

// arguments .. default object in every function.. that can be used to track the passed arguments...

// function myLog(a) {
//   console.log(arguments.length, a, arguments[1]);
// }

// // myLog("Correct");
// myLog("Also", "Correct");

// function sum() {
//   let count = arguments.length;
//   let total = 0;
//   for (let i = 0; i < count; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// Parameters and ...
// ... "rest" parameter, it allows us to specify all final argument to a function..by naming ourselves..

// function sum(...numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5));
// true and false... Boolean values
// truthy and falsy...

// Dealing with Optional and Missing Arguments

// function updateScore(currentScore, value, bonus = 1) {
//   // 1. using if else
//   // if (bonus) {
//   //   return currentScore + value * bonus;
//   // } else {
//   //   return currentScore + value;
//   // }
//   // 2. using ternary operator
//   // return bonus ? currentScore + value * bonus : currentScore + value;
//   // 3. usign logical OR operator
//   // bonus = bonus || 1;
//   // return currentScore + value * bonus;
//   // 4. Using shortcut for number 3...
//   // return currentScore + value * (bonus || 1);
//   // 5. default parameters..

//   return currentScore + value * bonus;
// }

// console.log(updateScore(10, 3));
// console.log(updateScore(10, 3, 2));

// Binding functions with variables...

// function greeting(greeting, name) {
//   return greeting + " " + name;
// }

// var sayHi = greeting; //bind a reference to greeting to sayHi

// console.log(greeting("Hello", "Steven"));
// console.log(sayHi("Hi", "Christina"));

// Built-in/Pre-defned/Global Functions

// parseInt()
// parseFloat()
// let age = "20years";
// let height = "5.6feet";

// console.log(parseInt(age));
// console.log(parseFloat(height));

// inNaN()

// console.log(isNaN(5));
// console.log(isNaN("a5"));

// console.*

// Math. abs(), max(), min(), random(), round()
// Date.now()
// JSON.parse(), JSON.stringify()...Parse converts JSON data to normal JavaScript.. Stringify() converts normal javascript to JSON..

// Introduction to Objects and Object Oriented Programming
// object is a collection of data and methods.. together...

let str = "The best sound in. this world, is your name";

function addPeriod(s) {
  // if (s.endsWith(".")) {
  //   return s;
  // } else {
  //   return s + ".";
  // }

  // return s.endsWith(".") ? s : `${s}.`;

  // return s.includes(".") ? s : `${s}.`; //not a good idea..

  let lastPos = s.length - 1;

  // return s.charAt(lastPos) === "." ? s : `${s}.`;

  return s.lastIndexOf(".") === lastPos ? s : `${s}.`;
}

console.log(addPeriod("hello."));
console.log(addPeriod(str));
