// a file to see what are tests?

const getFullName = (fname, lname) => {
  return `${fname} ${lname}!`;
};

const actualFullName = getFullName("Alan", "Smith");
const expectedFullName = "Alan Smith!";

if (actualFullName !== expectedFullName) {
  throw new Error("Failed");
} else {
  console.log("Passed");
}
