/* Code for The Gym with results formatted in a table. */
 
/* // Desc: Generate and display receipt for new members of The Gym. */
/* // Author: Maurice and SD 14 */
/* // Dates: March 10/25 - */
 
/* // Set up program constants. */
const MEM_RATE = 125.0;
const ADD_MEM_RATE = 75.0;
const HST_RATE = 0.15;
const CANCEL_RATE = 0.6;
 
/* // Constants used to format displayed variables. */
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});
 
const per2Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});
 
const num0Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "0",
  maximumFractionDigits: "0",
});
 
/* // Gather user input. */
 
let MemberNum = "12345"; //prompt("Enter the member number: ");
let MemName = "Jon Smith"; //prompt("Enter the member name: ");
let MemStreet = "123 Some St."; //prompt("Enter the member street address: ");
let MemPhone = "1234567890"; //prompt("Enter the member prone number: ", "9999999999");
let NumAddFamMem = "2"; //prompt("Enter the number of additional family members: ", 9);
NumAddFamMem = parseInt(NumAddFamMem);
let TotalMembers =
  NumAddFamMem + 1; /* Number of add members + the primary person. */
 
// Generate program calculated results.
MemCost = MEM_RATE + NumAddFamMem * ADD_MEM_RATE;
 
HST = MemCost * HST_RATE;
TotMemCost = MemCost + HST;
 
CancelFee = MemCost * 3 * CANCEL_RATE;
 
// Display program results to the screen in a table.
document.write("<br />");
 
document.write("<table class='receipttable'>");
 
document.write("<tr>");
document.write(
  "<td colspan='2' class='mainhead'>The Gym - Customer Receipt</td>"
);
document.write("</tr>");
 
document.write("<tr>");
document.write(
  "<td colspan='2'> <br /> Member number: " + MemberNum + "<br /><br />"
);
document.write("Member name: &nbsp;&nbsp;" + MemName + "<br />");
document.write(
  "Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + MemStreet + "<br /><br />"
);
document.write("Phone number: &nbsp;" + MemPhone + "<br /><br /></td>");
document.write("</tr>");
 
document.write("<tr>");
document.write("<td>Number of members:</td>");
document.write(
  "<td class='righttext'>" + num0Format.format(TotalMembers) + "</td>"
);
document.write("</tr>");
 
document.write("<tr>");
document.write("<td>Membership cost:</td>");
document.write("<td class='righttext'>" + cur2Format.format(MemCost) + "</td>");
document.write("</tr>");
 
document.write("<tr>");
document.write("<td><br /></td>");
document.write("<td class='righttext'><br /></td>");
document.write("</tr>");
 
document.write("<tr>");
document.write("<td>HST:</td>");
document.write("<td class='righttext'>" + cur2Format.format(HST) + "</td>");
document.write("</tr>");
 
document.write("<tr>");
document.write("<td>Total membership cost:</td>");
document.write(
  "<td class='righttext'>" + cur2Format.format(TotMemCost) + "</td>"
);
document.write("</tr>");
 
document.write("<tr>");
document.write("<td><br /></td>");
document.write("<td class='righttext'><br /></td>");
document.write("</tr>");
 
document.write("<tr>");
document.write("<td>Cancellation fee:</td>");
document.write(
  "<td class='righttext'>" + cur2Format.format(CancelFee) + "</td>"
);
document.write("</tr>");
 
document.write("</table>");
 
document.write("<br />");
