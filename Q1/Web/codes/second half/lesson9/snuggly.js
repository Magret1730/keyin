// Code for the Snuggly Company.
 
// Desc: Prepare customer receipt for The Snuggly Company.
// Author: Maurice & SD 14
// Dates: March 11/25 -
 
// Define any program constants.
const SNUG_COST_LOW = 21.99;
const SNUG_COST_MED = 24.99;
const SNUG_COST_HIGH = 29.99;
 
const SHIP_COST_LOW = 3.99;
const SHIP_COST_HIGH = 5.99;
 
const HST_RATE = 0.15;
const SER_CHRG_RATE = 0.03;
 
// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});
 
const per0Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: "0",
  maximumFractionDigits: "0",
});
 
const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});
 
// Gather user input.
let CustName = "Jon Smith";
let StAdd = "123 Main St.";
let City = "St John's";
let Prov = "NL";
let Postal = "A1A8Y9";
let Phone = "1234567890";
let CCNum = "1234123412341234";
let NumSnug = prompt("Enter the number of Snuggly's to order: ", 99);
NumSnug = parseInt(NumSnug);
 
// Perform program calculations and generate results.
 
// When calcs are performed in an if - all varaibles must be defined outside the if block.
let TotSnugCost = 0;
if (NumSnug > 10) {
  TotSnugCost = NumSnug * SNUG_COST_LOW;
} else if (NumSnug >= 2) {
  TotSnugCost = NumSnug * SNUG_COST_MED;
} else {
  TotSnugCost = SNUG_COST_HIGH;
}
 
let TotShipCost = 0;
if (NumSnug >= 6) {
  TotShipCost = NumSnug * SHIP_COST_LOW;
} else {
  TotShipCost = NumSnug * SHIP_COST_HIGH;
}
 
let Subtotal = TotSnugCost + TotShipCost;
let HST = Subtotal * HST_RATE;
let TotOrder = Subtotal + HST;
 
let CCCharge = TotOrder * SER_CHRG_RATE;
 
// Prepare the receipt for the customer in a table.
document.writeln("<br />");
document.writeln("<table class='receipttable'>");
 
document.writeln("<tr>");
document.writeln(
  "<td colspan='2'>SNUGGY COMPANY<br />Customer Purchase Receipt</td>"
);
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td colspan='2'><br />Customer Details:<br /><br /></td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln(
  "<td colspan='2'>" +
    CustName +
    "<br />" +
    StAdd +
    "<br />" +
    City +
    ", " +
    Prov +
    " " +
    Postal +
    "</td>"
);
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td colspan='2'><br />Purchase Details:<br /><br /></td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>Snuggly Cost:</td>");
document.writeln(
  "<td class='righttext'>" + cur2Format.format(TotSnugCost) + "</td>"
);
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>Shipping Cost:</td>");
document.writeln(
  "<td class='righttext'>" + cur2Format.format(TotShipCost) + "</td>"
);
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td><br /></td>");
document.writeln("<td class='righttext'>---------</td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>Subtotal:</td>");
document.writeln(
  "<td class='righttext'>" + cur2Format.format(Subtotal) + "</td>"
);
document.writeln("</tr>");
 
document.writeln("<tr>");
// The percent format multplies by 100 and puts the % at the end.
document.writeln("<td>HST (@ " + per0Format.format(HST_RATE) + "):</td>");
document.writeln("<td class='righttext'>" + cur2Format.format(HST) + "</td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td><br /></td>");
document.writeln("<td class='righttext'>---------</td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>Invoice Total:</td>");
document.writeln(
  "<td class='righttext'>" + cur2Format.format(TotOrder) + "</td>"
);
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td><br /></td>");
document.writeln("<td class='righttext'>=========</td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td><br /></td>");
document.writeln("<td class='righttext'><br /></td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>HST Registration #:</td>");
document.writeln("<td class='righttext'>34-FG55-83993</td>");
document.writeln("</tr>");
 
document.writeln("<tr>");
document.writeln("<td>CC Service Charge:</td>");
document.writeln(
  "<td class='righttext'>" + cur2Format.format(CCCharge) + "</td>"
);
document.writeln("</tr>");
 
document.writeln("</table>");
document.writeln("<br />");