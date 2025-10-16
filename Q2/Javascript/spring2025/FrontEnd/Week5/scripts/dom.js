window.addEventListener("DOMContentLoaded", function () {
  let body = this.document.body;

  body.addEventListener("mousemove", function (evt) {
    // console.log("body clicked");
    // Display the mouse position in the given area

    // console.log(evt.clientX);
    // console.log(evt.clientY);
    document.querySelector("#posX").innerText = evt.clientX;
    document.querySelector("#posY").innerText = evt.clientY;
  });

  let cat = document.querySelector("#cat");
  cat.addEventListener("click", function (evt) {
    // console.log("Cat clicked!!");

    cat.src = nextImageUrl();
    evt.stopPropagation();
  });

  let currentCatIndex = 0;
  function nextImageUrl() {
    currentCatIndex++;
    if (currentCatIndex === cats.length - 1) {
      currentCatIndex = 0;
    }

    return cats[currentCatIndex];
  }

  let more = this.document.querySelector("#more");
  more.addEventListener("click", function () {
    //    this funciton will create an unordered list and bring all the urls from cats.js and make a list on html page..

    more.remove();
    cat.remove();
    let ul = document.createElement("ul");

    let i = 0;
    cats.forEach(function (url) {
      let li = document.createElement("li");
      //   li.innerHTML = `<a href="${url}">${url}</a>`;

      let a = document.createElement("a");
      a.href = url;
      //   a.innerText = url;
      //   a.innerText = "Image 1";
      a.innerHTML = `Image-${i++}`;
      a.target = "_blank";
      li.appendChild(a);
      ul.appendChild(li);
    });

    // 1. These urls should be linked to themselves
    document.querySelector("#list").appendChild(ul);
  });

  //   Timer functions...
  //   this.setTimeout(function () {
  //     cat.src = nextImageUrl();
  //   }, 2000);

  this.setInterval(function () {
    cat.src = nextImageUrl();
  }, 1000);
});
