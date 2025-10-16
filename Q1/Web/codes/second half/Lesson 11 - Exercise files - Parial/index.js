// Desc:
// Author:
// Dates:

var $ = function (id) {
  return document.getElementById(id);
};

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

const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

// Add other program constants as required.
const MARKUP_RATE = 0.75;

// Start function definitions here.
function ShowGreeting() {
  // Create the greeting based on the hour of the day.
  // Use the getHour() method on the current date - in 24 hour clock.

  let CurDate = new Date();
  let CurHour = CurDate.getHours(); // This returns a value from 0-24

  let Greeting = "";
  if (CurHour >= 6 && CurHour <= 12) {
    Greeting = "Good Morning";
  } else if (CurHour >= 12 && CurHour <= 18) {
    Greeting = "Good Afternoon";
  } else if (CurHour >= 18 && CurHour <= 24) {
    Greeting = "Good Evening";
  } else {
    Greeting = "Good Night";
  }

  Greeting += " - " + CurDate.toDateString();
  document.writeln(Greeting);
}

function ShowQuote1() {
  // Show a quote when the user clicks on the View 1 link.

  Quote = "The early bird gets the worm.";
  document.getElementById("txtQuote").innerHTML = Quote;
}

function ShowQuote2() {
  // Show a quote when the user clicks on the View 1 link.

  Quote = "A stitch in time, saves nine.";
  document.getElementById("txtQuote").innerHTML = Quote;
}

function ShowQuote3() {
  // Show a quote when the user clicks on the View 1 link.

  Quote = "Don't eat yellow snow.";
  document.getElementById("txtQuote").innerHTML = Quote;
}

function ShowQuote4() {
  // Show a quote when the user clicks on the View 1 link.

  Quote = "To err is human<br />To relly screw up <br />requires a computer";
  document.getElementById("txtQuote").innerHTML = Quote;
}

function ClearMsg() {
  // Show a quote when the user clicks on the View 1 link.

  Quote = "";
  document.getElementById("txtQuote").innerHTML = Quote;
}

function ShowInv() {
  // Show inventory results for new items in stock.

  let ItemName = prompt("Enter the item name: ");
  let ItemCost = prompt("Enter the item cost: ");
  ItemCost = parseFloat(ItemCost);
  let NumStock = prompt("Enter the number in stock: ");
  NumStock = parseInt(NumStock);

  let RetailPrice = ItemCost + ItemCost * MARKUP_RATE;

  let Off10 = RetailPrice * 0.9; // Use the complements of the percentage off.
  let Off25 = RetailPrice * 0.75;
  let Off33 = RetailPrice * 0.67;
  let Off50 = RetailPrice * 0.5;

  console.log(RetailPrice);
  console.log(Off10);
  console.log(Off25);
  console.log(Off33);
  console.log(Off50);
}
