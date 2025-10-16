// Desc: Prepare customer receipt for St. John’s Marina & Yacht Club.
// Author: Abiodun Magret Oyedele & SD 14
// Dates: March 22 2025

// Define program constants.
const SITE_COST_EVEN = 80.00;
const SITE_COST_ODD = 120.00;
const ALT_MEMBER_COST = 5.00;
const CLEANING_COST = 50.00;
const SURVEILLANCE_COST = 35.00;
const HST_RATE = 0.15; // HST rate (15%)
const MONTHLY_DUES_STANDARD = 75.00;
const MONTHLY_DUES_EXECUTIVE = 150.00;
const PROCESSING_FEE = 59.99;
const CANCELLATION_RATE = 0.6;

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

// Gather user input.
let currentDate = prompt("Enter the current date (YYYY-MM-DD): ");
let siteNumber = parseInt(prompt("Enter the site number (1-100): "));
let memberName = prompt("Enter the member's name: ");
let streetAddress = prompt("Enter the street address: ");
let city = prompt("Enter the city: ");
let province = prompt("Enter the province: ");
let postalCode = prompt("Enter the postal code: ");
let phoneNumber = prompt("Enter the phone number: ");
let cellNumber = prompt("Enter the cell number: ");
let membershipType = prompt("Enter membership type (S for Standard, E for Executive): ").toUpperCase();
let alternateMembers = parseInt(prompt("Enter the number of alternate members: "));
let weeklyCleaning = prompt("Weekly site cleaning? (Y for Yes, N for No): ").toUpperCase();
let videoSurveillance = prompt("Video surveillance? (Y for Yes, N for No): ").toUpperCase();

// Perform program calculations.
let siteCharges = 0;
if (siteNumber % 2 === 0) {
    siteCharges = SITE_COST_EVEN + (alternateMembers * ALT_MEMBER_COST);
} else {
    siteCharges = SITE_COST_ODD + (alternateMembers * ALT_MEMBER_COST);
}

let extraCharges = 0;
if (weeklyCleaning === "Y") {
    extraCharges += CLEANING_COST;
} else if (videoSurveillance === "Y") {
    extraCharges += SURVEILLANCE_COST;
}

let subTotal = siteCharges + extraCharges;
let tax = subTotal * HST_RATE;
let totalMonthlyCharge = subTotal + tax

// monthly dues
let monthlyDues = 0
if (membershipType === "S") {
    monthlyDues += MONTHLY_DUES_STANDARD;
} else if (membershipType === "E") {
    monthlyDues += MONTHLY_DUES_EXECUTIVE;
}

let totalMonthlyFees = totalMonthlyCharge + monthlyDues;
let totalYearlyFees = totalMonthlyFees * 12

let monthlyPayment = (totalYearlyFees + PROCESSING_FEE) / 12;

let cancellationFee = (siteCharges * 12) * CANCELLATION_RATE;


// Display program results to the screen in a table.
// I found it challenging to align the text to the right without using a divider between the labels and values.
// Additionally, using &nbsp; for spacing is problematic when the amount of data varies, such as when 'No' has
// 2 characters and 'Yes' has 3, making it difficult to maintain consistent alignment.
document.writeln("<br />");
document.writeln("<table class='receipttable'>");

document.writeln("<tr>");
document.writeln("<td>St. John’s Marina & Yacht Club<br />Yearly Member Receipt</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td><br />Client Name and Address:<br /><br /></td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + memberName + "<br />" + streetAddress + "<br />" + city + ", " + province + " " + postalCode + "</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Phone: " + phoneNumber + " (H)<br />" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cellNumber + " (C)</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Site #: " + siteNumber + 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    + "Member type: ");

if (membershipType === "S") {
    document.writeln("Standard");
} else {
    document.writeln("Executive");
}
document.writeln("</td>");
document.writeln("</tr>");


document.writeln("<tr>");
document.writeln("<td>Alternate members: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + alternateMembers + "<br />" +
    "Weekly site cleaning:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (weeklyCleaning === "Y" ? "Yes" : "No") + "<br />" +
    "Video surveillance:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +(videoSurveillance === "Y" ? "Yes" : "No") + "</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Site charges: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(siteCharges) + "<br />" +
    "Extra charges:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(extraCharges) + "<br />");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Subtotal: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(subTotal) + "<br />" +
    "Sales tax (HST):" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(tax) + "<br />");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Total monthly charges: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(totalMonthlyCharge) + "<br />" +
    "Monthly dues:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(monthlyDues) + "<br />");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Total monthly fees: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(totalMonthlyFees) + "<br />" +
    "Total yearly fees:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(totalYearlyFees) + "<br />");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Monthly payment: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(monthlyPayment) + "<br />");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Issued: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + currentDate + "<br />" + "<br />" +
    "HST Reg No:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "549-33-5849-47" + "<br />" + "<br />" +
    "Cancellation fee:" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cur2Format.format(cancellationFee) + "<br />" + "</td>");
document.writeln("</tr>");

document.writeln("</table>");
document.writeln("<br />");
