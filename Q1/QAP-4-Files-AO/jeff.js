// Javascript file for the Marina Membership Receipt program.
// This program calculates the yearly membership fees for a marina and yacht club.
// Date: 2025-03-22
// Author: Jeff Woolridge
 
// Define any program constants.
const MAX_SITES = 100;
const EVEN_SITES = 80.00;
const ODD_SITES = 120.00;
const ADD_MEM = 5.00;
const HST_RATE = .15;
const CLEAN_CHARGE = 50.00;
const VID_CHARGE = 35.00;
const S_MEM_CHARGE = 75.00;
const E_MEM_CHARGE = 150.00;
const HST_REG_NUM = "549-33-5849-47"
const PROCESSING_FEE = 59.99;
 
// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
 
const per0Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
 
const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
 
 
// Gather user input.
let receiptDate = prompt("Enter the current date: ", "2001-01-01");
let siteNumber = parseInt(prompt("Enter the site number: ", "000"));
let memName = prompt("Enter member name: ", "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
let strAddr = prompt("Enter street address: ", "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
let city = prompt("Enter city: ", "XXXXXXXXXXXXXXXXXXXXXXXX");
let prov = prompt("Enter province: ", "XX");
let postal = prompt("Enter postal code: ", "X#X#X#");
let homePhone = prompt("Enter home phone number: ", "##########");
let cellPhone = prompt("Enter cell phone number: ", "##########");
let memType = prompt("Enter membership type (E for executive, S for standard): ", "XXXXXXXXX");
let numAltMem = parseInt(prompt("Enter number of alternate members: ", "00"));
let siteClean = prompt("Weekly site cleaning? Y/N: ", "#");
let vidSurveillance = prompt("Video surveillance? Y/N: ", "#");
 
 
// Perform program calculations and generate results.
 
// Calculate site charge based on site number.
let siteCharge = 0;
if (siteNumber % 2 === 0) { // Even-numbered sites
  siteCharge = EVEN_SITES;
} else { // Odd-numbered sites
  siteCharge = ODD_SITES;
}
 
// Alternate member charges
let alternateMemberCharges = numAltMem * ADD_MEM;
 
// Extra charges (for cleaning and video surveillance)
let extraCharges = 0;
if (siteClean === "Y") {
  extraCharges += CLEAN_CHARGE;
}
 
if (vidSurveillance === "Y") {
  extraCharges += VID_CHARGE;
}
 
if (memType === "S" || memType === "s") {
  memType = "Standard";
} else if (memType === "E" || memType === "e") {
  memType = "Executive";
}
 
let membershipDues = 0;
if (memType === "Standard") {
  membershipDues = S_MEM_CHARGE;
}
else if (memType === "Executive") {
  membershipDues = E_MEM_CHARGE;
}
 
let subtotal = siteCharge + alternateMemberCharges + extraCharges;
let taxAmount = subtotal * HST_RATE;
let totalMonthlyCharge = subtotal + taxAmount;
let totalMonthlyFees = totalMonthlyCharge + membershipDues;
let totalYearlyFees = totalMonthlyFees * 12;
let monthlyPayment = (totalYearlyFees + PROCESSING_FEE) / 12;
let cancellationFee = 0.60 * siteCharge * 12;
 
// Display the results in the console (can also be shown in a webpage or printed)
 
document.writeln("<table>");
 
document.writeln(
  "<th colspan='2'>St. John's Marina & Yacht Club<br />Yearly Membership Recepit</th>"
)
document.writeln("<tr>");
document.writeln(
  "<td colspan='2'><br />Client Name and Address:<br /><br /></td>"
)
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln(
  "<td colspan='2'>" +
    memName +
    "<br />" +
    strAddr +
    "<br />" +
    city +
    ", " +
    prov +
    " " +
    postal +
    "<br /><br />Phone: " +
    homePhone +
    "(H)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cellPhone +
    "(C)</td>"
  );
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>Site #: " + siteNumber + "</td>");
document.writeln(
  "<td class='righttext'>Member type: " +
    memType +
    "</td>"
  );
document.writeln("<tr/>");
 
document.writeln("<tr>");
document.writeln("<td>Alternative members: <br />Weekly site cleaning: <br />Video surveillance: </td>");
document.writeln(
  "<td class='righttext'>" +
    numAltMem +
    "<br />" +
    siteClean +
    "<br />" +
    vidSurveillance +
    "</td>"
  );
document.writeln("<tr>");
document.writeln(("<td>Site chargs: <br />Extra charges: </td>"));
document.writeln(
  "<td class='righttext'>" +
    cur2Format.format(siteCharge) +
    "<br />" +
    cur2Format.format(extraCharges) +
    "</td>"    
  );
 
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Subtotal: <br />Sales tax (HST): </td>");
document.writeln(
  "<td class='righttext'>" +
  cur2Format.format(subtotal) +
  "<br />" +
  cur2Format.format(taxAmount) +
  "</td>"
);
 
document.writeln("<tr/>");
document.writeln("<tr>");
document.writeln("<td>Total monthly charges: <br />Monthly dues: </td>");
document.writeln(
  "<td class='righttext'>" +
  cur2Format.format(totalMonthlyCharge) +
  "<br />" +
  cur2Format.format(membershipDues) +
  "</td>"
);
 
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Total monthly fees: <br />Total yearly fees: </td>")
document.writeln(
  "<td class='righttext'>" +
  cur2Format.format(totalMonthlyFees) +
  "<br />" +
  cur2Format.format(totalYearlyFees) +
  "</td>"
);
 
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Monthly Payment: </td>");
document.writeln(
  "<td class='righttext'>" +
  cur2Format.format(monthlyPayment) +
  "</td>"
);
 
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Issues: <br /><br />HST REG No: <br /><br />Cancellation fee: </td>");
document.writeln(
  "<td class='righttext'>" +
  receiptDate +
  "<br /><br />" +
  HST_REG_NUM +
  "<br /><br />" +
  cur2Format.format(cancellationFee) +
  "</td>"
);
 
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td class='footer-black' colspan='2'></td>");
document.writeln("</tr>");
document.writeln("</table>");