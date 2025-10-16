// Desc: Javascript Portion of the Final Sprint
// Author: Abiodun Magret Oyedele, Jeff Woolridge, Taylor Carter, Lana Starkes
// Dates: 8th April 2025 - 

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

// Start function definitions here.

// Function shows greetings
function showGreetingDatesQuotes() {
  let CurDate = new Date();
  let CurHour = CurDate.getHours();

  // gets greetings
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

  const dateStr = CurDate.toDateString();

  const quotesArray = [
    "Family is not an important thing, it’s everything.",
    "The love of a family is life’s greatest blessing.",
    "In time of test, family is best.",
    "Rejoice with your family in the beautiful land of life.",
    "The most important thing in the world is family and love.",
    "Family: where life begins and love never ends.",
    "Having somewhere to go is home. Having someone to love is family.",
    "Family means no one gets left behind or forgotten.",
    "Other things may change us, but we start and end with family.",
    "Family is the heart of a home.",
    "Being a family means you are part of something very wonderful.",
    "The memories we make with our family are everything.",
    "What can you do to promote world peace? Go home and love your family.",
    "A happy family is but an earlier heaven.",
    "Nothing is better than going home to family and eating good food.",
    "My family is my life, and everything else comes second.",
    "Family is the compass that guides us.",
    "Families are the tie that reminds us of yesterday and provide strength for today."
  ];

  // Gets random quotes
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const singleQuote = quotesArray[randomIndex];

  message = `${Greeting} - ${singleQuote} - ${dateStr}`;

  document.getElementById("quotes").textContent = message;
}

let step = 0;
let images = new Array();
images[0] = "Images/family0.jpg";
images[1] = "Images/family1.jpg";
images[2] = "Images/family2.jpg";
images[3] = "Images/family3.jpg";
images[4] = "Images/family4.jpg";
// images[5] = "Images/image5.jpg";
// images[6] = "Images/image6.jpg";
// images[7] = "Images/image7.jpg";
// images[8] = "Images/image8.jpg";
// images[9] = "Images/image9.jpg";
// images[10] = "Images/image10.jpg";

function gallery() {
  document.getElementById("slideshow").src = images[step];

  if (step < images.length - 1) {
    step++;
  } else {
    step = 0;
  }
}

// slide show
window.onload = setInterval(gallery, 4000);

// Shows this when the page loads
window.onload = showGreetingDatesQuotes;

function tellMeAStory() {
  const name = prompt("Enter your name:");
  const familyMember = prompt("Name a family member:");
  const place = prompt("Name a place you love going to as a family:");
  const activity = prompt("What's your favorite family activity?");
  const memory = prompt("What's a cherished memory with your family?");

  const storyHTML = `
    <p><strong>${name}</strong> comes from a beautiful family filled with love and joy.</p>
    <p>Every weekend, ${name} and their beloved <em>${familyMember}</em> go to <u>${place}</u>.</p>
    <p>There, they always enjoy <strong>${activity}</strong> together.</p>
    <p>One day, they laughed for hours remembering <q>${memory}</q>. It was a moment to treasure forever.</p>
    <p>Because no matter where life takes them, <em>family</em> is the true anchor that keeps them grounded.</p>
  `;

  document.getElementById("maintopleft-output").innerHTML = storyHTML;
}

function loanAnalysis() {
  let amount = prompt("Enter the loan amount:");
  let reason = prompt("What is the reason for the loan?");

  amount = parseFloat(amount);
  reason = reason
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const rate = 0.052;
  const todayDate = new Date().toLocaleDateString();

  let results = `<br><h3>Loan Analysis Statement</h3>`;
  results += `<p>10 Year options for loan of <strong>${cur2Format.format(amount)}</strong></p>`;
  results += `<p>Reason: <strong>${reason}</strong></p>`;
  results += `<p>Statement date: <strong>${todayDate}</strong></p>`;

  results +=`<br><br>`;

  results += `
    <div style="display: flex; font-weight: bold; gap: 10px;">
      <div style="width: 60px;">Years</div>
      <div style="width: 120px;">Interest</div>
      <div style="width: 120px;">Total Amt</div>
      <div style="width: 140px;">Mon Payment</div>
    </div>
    <div style="border-bottom: 1px solid #6a0dad; margin-bottom: 10px;"></div>
  `;

  const rows = [];

  for (let year = 1; year <= 10; year++) {
    const interest = amount * rate * year;
    const total = amount + interest;
    const monthly = total / (year * 12);

    rows.push(`
      <div style="display: flex; gap: 10px; margin-bottom: 4px;">
        <div style="width: 60px;">${year}</div>
        <div style="width: 120px;">${cur2Format.format(interest)}</div>
        <div style="width: 120px;">${cur2Format.format(total)}</div>
        <div style="width: 140px;">${cur2Format.format(monthly)}</div>
      </div>
    `);
  }

  results += rows.join("");
  results += `<div style="border-top: 1px solid #6a0dad; margin-top: 10px;"></div>`;

  const years = prompt("Enter the number of years you'd like to repay the loan (1 - 10):");

  results += `<p><strong>Payback option selected: <span style="float: right; margin-right: 2rem;">${years} Years</span></strong></p>`;

  document.getElementById("mainright-output").innerHTML = results;
}

const paletteColors = [
  ["#F9C5D1", "#FCD5CE", "#F8EDEB", "#D8E2DC", "#FFE5D9"],
  ["#EFD6AC", "#B7B7A4", "#E2CFC3", "#CDB4DB", "#FFC8DD"],
  ["#A2D2FF", "#BDE0FE", "#CDB4DB", "#FFAFCC", "#D8E2DC"],
  ["#FDE2E4", "#FFF0F3", "#FAD2E1", "#E2ECE9", "#BFD8BD"],
  ["#FFF1E6", "#FAD2E1", "#FFCBF2", "#B5EAD7", "#C7CEEA"],
  ["#FFD6E0", "#FFC4D6", "#FFB7C5", "#FF8FAB", "#FFC8DD"],
  ["#FFEE93", "#FCF5C7", "#A0CED9", "#ADF7B6", "#FFC09F"],
  ["#E2F0CB", "#B5EAD7", "#C7CEEA", "#FFDAC1", "#FFB7B2"],
  ["#D4E09B", "#F6F4D2", "#CBDFBD", "#F19C79", "#A44A3F"],
  ["#E2F3F4", "#D1E5F2", "#DAC4F7", "#F7C6E2", "#F4D4D4"]
];

function generateColorPalette() {
  const colorPaletteDiv = document.getElementById("colorPalette");
  colorPaletteDiv.innerHTML = "";

  const randomSet = paletteColors[Math.floor(Math.random() * paletteColors.length)];

  randomSet.forEach(color => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;
    colorPaletteDiv.appendChild(colorBox);
  });
}
