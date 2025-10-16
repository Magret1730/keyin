// Here is the JS code for the claims processing in the Claim.js file.
 
// Desc:   Program to calculate and display business claim results.
// Author: Maurice & SD 14
// Dates:  Mar 3/25 -
 
// Define program constants.
const PER_DIEM_RATE = 56.0;
const LODGE_RATE = 125.0;
const MIL_RATE = 0.24;
const HST_RATE = 0.15;
 
// Define program functions.
 
// Main program.
 
// Gather user inputs.
 
// When you use a variable for the first time, you must declare it with a let statement.  You may also see var rather than let - older statement.
let SalesName = prompt("Enter the salesperson's name: ");
let Location = prompt("Enter the trip location: ");
 
let NumDays = prompt("Enter the number of days: ", 2);
NumDays = parseInt(NumDays);
 
let NumKilos = prompt("Enter the number of kilometers: ");
NumKilos = parseFloat(NumKilos);
 
// Perform program calculations.
let PerDiemAmt = NumDays * PER_DIEM_RATE;
 
// Use the console to print intermediate results as a form of checking. Once the check is OK and the results are fine, remove this statement.
console.log(PerDiemAmt);
 
let LodgeAmt = (NumDays - 1) * LODGE_RATE;
let KiloAmt = NumKilos * MIL_RATE;
 
let TotalClaim = PerDiemAmt + LodgeAmt + KiloAmt;
let HST = TotalClaim * HST_RATE;
 
let ClaimTotal = TotalClaim + HST;
 
// Display program results.
document.write("Salesperson name: " + SalesName + "<br />");
document.write("Location: " + Location + "<br />");
document.write("Number of days: " + NumDays + "<br />");
document.write("Number of kilometers travelled: " + NumKilos + "<br />");
 
document.write("<br />");
 
document.write("Per diem amount: " + PerDiemAmt + "<br />");
document.write("Lodging amount: " + LodgeAmt + "<br />");
document.write("Kilometer amount: " + KiloAmt + "<br />");
 
document.write("<br />");
 
document.write("Total claim: " + TotalClaim + "<br />");
document.write("HST: " + HST + "<br />");
document.write("Claim total: " + ClaimTotal + "<br />");
 
// If an error occurs, right click browser, click Inspect from the menu, and click on Console.