let step = 0;
let images = new Array();
images[0] = "images/RAV4a.avif";
images[1] = "images/RAV4b.avif";
images[2] = "images/RAV4c.avif";
images[3] = "images/RAV4c.avif";

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