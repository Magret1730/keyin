// Sample code for an IF statement.
 
/* Syntax for an if statement in JavaScript. */
 
let Age = 16;
 
if (Age >= 19) {
  /* The criteria must be enclosed in () */
  document.write("This person can enter this establishment.");
} else {
  document.write("This person is too young - kick them out.");
}
/* The statements in the True and False sections are enclosed in {} */
 
/* Alternative spacing for the if */
if (Age >= 19) {
  document.write("This person can enter this establishment.");
} else {
  document.write("This person is too young - kick them out.");
}
 
let ItemCost = 9.95;
if (ItemCost <= 10.0) {
  document.write("<br />Cheap item - check for quality.");
} else if (ItemCost > 10.0 && ItemCost < 40.0) {
  /* or is || */
  document.write("<br />Standard cost range.");
} else {
  document.write("<br />Top value item - check that quality is a match.");
}