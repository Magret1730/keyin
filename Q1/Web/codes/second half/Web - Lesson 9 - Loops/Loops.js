// Desc: Practice Loops
// Author: Maurice & SD 14
// Dates: March 13/25

// Define program constants.

// Define format options for printing.
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

const com0Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "0",
  maximumFractionDigits: "0",
});

const com1Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "1",
  maximumFractionDigits: "1",
});

// Start the main program here.
//     for (Start, End, Update) {
//         Program statements
//     }

//     Initialize a loop counter
//     while (Criteria) {
//         Program statements
//
//         Update the program counter
//     }

//     do {
//         Program statements
//     while (Criteria) }

// Loop 10 times and print the values from 1 - 10.
for (let Number = 1; Number <= 10; Number++) {
  // Number++ will increase the value of Number by 1.
  // Number += 1
  document.writeln(Number + "<br />");
}

document.writeln("<br /><br />");

// Do the same thing with a while loop.
let Number = 1;
while (Number <= 10) {
  document.writeln(Number + "<br />");

  Number += 1; // OR Number++
}

document.writeln("<br /><br />");

// Process temperatures from -20 to 30 celsius.

document.writeln("Celsius  Fahrenheit <br />");
document.writeln("------------------ <br />");

for (let CelTemp = 0; CelTemp <= 20; CelTemp++) {
  let FahrTemp = (9 / 5) * CelTemp + 32;

  document.writeln(
    "&nbsp;" +
      com0Format.format(CelTemp) +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
      com1Format.format(FahrTemp) +
      "<br />"
  );
}

document.writeln("------------------");
