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

// Define program constants.

// Start main program here.
let step = 0;
let Images = new Array();
Images[0] = "Images/Jan.jpg";
Images[1] = "Images/Feb.jpg";
Images[2] = "Images/Mar.jpg";
Images[3] = "Images/Apr.jpg";
Images[4] = "Images/May.jpg";
Images[5] = "Images/Jun.jpg";
Images[6] = "Images/Jul.jpg";
Images[7] = "Images/Aug.jpg";
Images[8] = "Images/Sep.jpg";
Images[9] = "Images/Oct.jpg";
Images[10] = "Images/Nov.jpg";
Images[11] = "Images/Dec.jpg";

// As the page loads, execute the following function when complete.
// The time is in milliseconds - so 3000 is just 3 seconds.
window.onload = setInterval(gallery, 3000);

function gallery() {
  //change image
  document.getElementById("ImgSlide").src = Images[step];
  //Or you can use - document.images.slide.src=Images[step];
  // is step more than the image array?
  if (step < Images.length - 1) {
    // No - add 1 for next image.
    step++;
  } else {
    // Yes - Start from the first image
    step = 0;
  }
}
