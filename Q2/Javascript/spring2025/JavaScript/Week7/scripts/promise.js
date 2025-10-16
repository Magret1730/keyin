// Promises: As in real world, we make promises, and either fulfil them OR donot fulfil them!
// If a promise is fullfilled, then we say "resolve()". Otherwise it is called "reject()"

let p = new Promise(function (resolve, reject) {
  let a = 5 + 3; //something that is taking a long time to execute.
  if (a === 10) {
    resolve("Promise Fulfilled!!");
  } else {
    reject("Promise failed/rejected");
  }
});

// How to call /use the promises..

// p.then().catch(); //.then() is executed if promise is resolve(), and .catch() executes when promise is rejected!

p.then(function (message) {
  console.log("Congrats!", message);
})
  .catch(function (message) {
    console.log("Alas!", message);
  })
  .finally(function () {
    console.log("I will anyhow run");
  });
