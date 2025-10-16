// console.log("hello from first js file");

// let age = 20;
// if (age >= 20) {
//   consoe.log("you are above 20");
// } else {
//   console.log("You are underage");
// }

// console.log("ending here");

// Syntax of JavaScript language!

// let customerCount = 10;
// let CustomerCount = 12;

// camelCase, dateOfBirth, RECOMMENDED....
// PascalCase, DateOfBirth,
// snake_case, date_of_birth,
// kebab-case, data-of-birth (CSS ....text-decoration:... background-color)
// console.log("hello");
// console.log("hello again");

/* 

Name: Noman Atique
Assingment: QAP1
Date: April 30,2025 */

// let x = 10; //statement has a statement terminator ;
// let y = 20;
// {
//   console.log("something");
//   console.log("hello");
//   let names = ["Alic", "Barbara"];
// }

// let age = 20;
// if (age > 20) {
//   console.log("twenty");
//   console.log("Good");
// }

// A block starts with {  and ends  }

// function foo() {
//   //body of the function
// }
// int x; string y; boolean x;

// let x;
// x = 10;
// console.log(x, typeof x);

// x = "Alison";
// console.log(x, typeof x);

// x = true;
// console.log(x, typeof x);

// var x;

// ES5 ES6 Advanced versions of JS...

// let and const..

// {
//   const x = 10;
//   //   x = 10;
//   console.log(x);
//   //   x = x + 10;
// }
// console.log(x);

// let has a "BLOCK level scope", const has the same scope as let.. but we cannot re assign a const value...
// var has a "function level scope"

// let lastName; //NO SPACE BETWEEN VARIABLE/FUNCITON names....

// let age; //Hoisting...

// {
//   age = 20;
//   console.log(age);
// }

// console.log(age);

// let x = "10.2";
// console.log(x, typeof x);

// " string",   'string', `string`

// let foo = function () {
//   console.log("foo function");
// };

// console.log(typeof foo);

// let numbers = [1, 2, 3];
// console.log(typeof numbers);

// let numbers = new Date();
// console.log(typeof numbers);

// let x = 10;
// x += 20;
// console.log(x);
// Increment/Decrement... Pre-increment/ Post-increment!

// let x = 10;
// console.log(x++); //10 ...11
// console.log(--x); // 10...10
// console.log(x--); // 10... 9
// console.log(++x); // 10... 10

// ==  coercion...
// strict equality operator! ALWAYS USE === .. in JS...

// let num = "10";

// if (num === 10) {
//   console.log("ten");
// } else {
//   console.log("wrong");
// }

// Binary Operator:   op_1 + op_2, op_1 -
// Unary Operators: ++, --... ++x, x++, --i, i--, !true = false.. ... ! unary operator...??
// Ternary Operator : that required 3 operands!
//  ?:
// op_1 ? op_2 : op_3
// condition ? value_if_true : value_if_false
// In react, we use this ternary a lot of places.. where we CANNOT use if and else..

// let age = 20;
// let message;

// age > 18 ? console.log("Welcome") : console.log("Underage");

// message = age > 18 ? "Welcome" : "Underage";
// console.log(message);

//  "  " ,  '  ' ,  `  `

// let age = 20;
// let message = "hello world";

// // console.log("The value of age is " + age + " The message is " + message);
// console.log(`The value of age is ${age} The message is ${message}`);

// Expression???

// x = 5; //NO.. x is one expression... 5 is one expression
// y = x + 10; //y is an expresison ... so as x+10...

// An expression is something that evalutes to some new thing...

// Sequential
// let y = 5;
// let x = y + 10;
// console.log(x, y);

//Conditional:

// let age = 20;
// if (age > 20) {
//   console.log("welcome");
// } else {
//   console.log("underage");
// }

// Looping:
//  a series of instructions repeatedly executed...until some condition is satisfied...

//  for(intialization ; condition ; increment/decrement){

//  }

// for (let i = 10; i >= 1; i--) {
//   console.log("Hello", i);
// }

// Nested loops??

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(`${i},${j}`);
//   }
//   console.log(`\n`);
// }

// i = 0... j 0 to 4..  5 times..
//i = 1 .. j 0 to 5.... 5 times
//

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = i; j <= 5; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// 4. Transfer... is done throug functions...

// in paranthesis! arguments/parameters to the functions...
// return something! may or may not return.. if it does not explicitly return anything it returns "undefined"

function foo(a) {
  return a + 5;
}
