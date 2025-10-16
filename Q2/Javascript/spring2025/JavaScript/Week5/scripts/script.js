// let user1 = {
//   id: 1,
//   firstName: "Alan",
//   lastName: "Smith",
//   age: 20,
//   isLoggedIn: false,
// };

// console.log(user1);
// user1.firstName = "Bob"; //update the firstName
// console.log(user1);

// let user1 = {
//   id: 1,
//   firstName: "Alan",
//   lastName: "Smith",
//   age: 20,
//   isLoggedIn: true,
//   hobbies: ["Reading", "Swimming"],
//   pref: { color: "Red", model: "Volvo" },
//   login: function () {
//     this.isLoggedIn = true;
//   },
//   logout: function () {
//     this.isLoggedIn = false;
//   },
// };

// let user2 = {
//   id: 2,
//   firstName: "Bob",
//   lastName: "Smith",
//   age: 24,
//   isLoggedIn: false,
//   hobbies: ["Reading", "Swimming"],
//   pref: { color: "Red", model: "Volvo" },
//   login: function () {
//     this.isLoggedIn = true;
//   },
//   logout: function () {
//     this.isLoggedIn = false;
//   },
// };
// // console.log(user1);
// // user1.logout();
// // console.log(user1);
// console.log(user1);
// console.log(user2);

// let users = [
//   {
//     id: 1,
//     firstName: "Alan",
//     lastName: "Smith",
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ["Reading", "Swimming"],
//     pref: { color: "Red", model: "Volvo" },
//     login: function () {
//       this.isLoggedIn = true;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//     },
//   },
//   {
//     id: 2,
//     firstName: "Alex",
//     lastName: "Ford",
//     age: 22,
//     isLoggedIn: false,
//     hobbies: ["Coin Collection", "Swimming"],
//     pref: { color: "Green", model: "Volvo" },
//     login: function () {
//       this.isLoggedIn = true;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//     },
//   },
//   {
//     id: 3,
//     firstName: "Christina",
//     lastName: "Lee",
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ["Reading", "Cycling"],
//     pref: { color: "Blue", model: "Audi" },
//     login: function () {
//       this.isLoggedIn = true;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//     },
//   },
// ];

// users.forEach(function (user) {
//   console.log(`${user.hobbies[0]} `);
// });

// "Constructor" function ..that can be used to construct objects...

// function User(f, l, a) {
//   this.firstName = f;
//   this.lastName = l;
//   this.age = a;
//   this.isLoggedIn = true;
//   this.hobbies = ["Reading", "Cycling"];
//   this.pref = { color: "Red", model: "Volvo" };
//   this.login = function () {
//     this.isLoggedIn = true;
//   };
//   //   this.logout = function () {
//   //     this.isLoggedIn = false;
//   //   };
// }

// // User.prototype.login = function () {
// //   this.isLoggedIn = true;
// // };

// User.prototype.logout = function () {
//   this.isLoggedIn = false;
// };

// let user1 = new User("Alan", "Smith", 20); //"this" will refer to this object
// let user2 = new User("Bob", "Smith", 22); //"this" will refer to this object
// let user3 = new User("Christina", "Lee", 21); //"this" will refer to this object...

// console.log(user1);
// user1.logout();
// console.log(user1);
// // user1.logout();
// // console.log(user1);

// Starting with cap means it's constructor funciton...

/* 

Write a constructor function "Person", that takes name and age as parameters, and creates object with these two fields only.
Then write a function addPerson(name,age) that receives two parameters and by using those two parameters it creates a new object of Person method, and pushes the newly create object into an array called people = [];
*/

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let people = [];
// function addPerson(n, a) {
//   let user = new Person(n, a);
//   people.push(user);
// }

// addPerson("Alan Smith", 23);
// addPerson("Bob Smith", 19);
// addPerson("Christina Lee", 20);
// console.log(people);

/* 

Write a constructor function "Car" that has following properties:
    1. make(string)
    2. model(string)
    3. year(number)

    Add a method getCarInfo() that returns a string combining all the properties
    For example:

    let car1 = new Car("Toyota", "Corolla",2019);
    console.log(car1.getCarInfo()); .....//outputs "Toyota Corolla, 2019"
*/

function Car(mk, md, yr) {
  this.make = mk;
  this.model = md;
  this.year = yr;

  this.getCarInfo = function () {
    return `The make is ${this.make}: The model is ${this.model} & the year is ${this.year}`;
  };
}

let car1 = new Car("Honda", "Odyssey", 2024);
console.log(car1.getCarInfo());

// class & objects concept.. in JavaScript!
