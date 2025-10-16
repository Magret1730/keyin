// get reference to the element on which you want to apply an event handler...

let item1 = document.querySelector("#item1");

// attach an event with item1...
item1.addEventListener("click", function () {
  let h1 = document.querySelector("#heading1");
  //   console.log(h1); //debugging by using console.log
  //   h1.innerText = "You clicked on First Item";
  h1.innerHTML = `You <em>clicked</em> on <em>First Item</em>`;

  let pic1 = document.querySelector("#img1");
  //   console.log(pic1);
  pic1.src = "./images/image3.jpg";
  pic1.width = "100";
});

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  let pic2 = document.querySelector("#img2");
  pic2.src = "./images/image3.jpg";

  let newPic = document.createElement("img");
  newPic.src = "./images/image3.jpg";
  newPic.width = "300";
  //   document.body.appendChild(newPic);

  document.querySelector("#div1").appendChild(newPic);
});
