document.addEventListener("DOMContentLoaded", function () {
/***Question 1***/
  function User(n, a) {
    this.name = n;
    this.age = a;
  }

  const users = [];

  function makeObj() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (name.trim() && age.trim()) {
      const user = new User(name, age);
      users.push(user);
      alert("User added!");
    } else {
      alert("Please enter both name and age.");
    }
  }

  function displayObj() {
    const displayDiv = document.getElementById("dsp");
    displayDiv.innerHTML = "";

    users.forEach((user, index) => {
      displayDiv.innerHTML += `<p><strong>User ${index + 1}:</strong> Name: ${user.name}, Age: ${user.age}</p>`;
    });
  }

  document.querySelector(".make").addEventListener("click", makeObj);
  document.querySelector(".display").addEventListener("click", displayObj);

  // Question Two
  function showJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/user.json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            let output = "";

            output += `<ul><li>Name: ${users.name}</li> </br> <li>Company: ${users.company}</li> </br> <li>Email: ${users.email}</li> </br> <li>Address: ${users.address}</li></ul>`;

            document.getElementById("q2").innerHTML = output;
        } else {
            document.getElementById("q2").textContent = "Failed to load JSON data.";
        }
    };

    xhr.send();
  }
  document.querySelector("#btnq2").addEventListener("click", showJSON);

  // Question three
  function mimeFromFilename(filename) {
    const mimeTypes = {
      "html": "text/html",
      "htm": "text/html",
      "css": "text/css",
      "js": "text/javascript",
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "gif": "image/gif",
      "bmp": "image/bmp",
      "ico": "image/x-icon",
      "cur": "image/x-icon",
      "png": "image/png",
      "svg": "image/svg+xml",
      "webp": "image/webp",
      "mp3": "audio/mp3",
      "wav": "audio/wav",
      "mp4": "video/mp4",
      "webm": "video/webm",
      "json": "application/json",
      "mpeg": "video/mpeg",
      "csv": "text/csv",
      "ttf": "font/ttf",
      "woff": "font/woff",
      "zip": "application/zip",
      "avi": "video/x-msvideo"
    };

    const trimmedFilename = filename.trim();

    if (!trimmedFilename) {
      return "Please enter a valid file name.";
    }

    const parts = filename.toLowerCase().split(".");
    if (parts.length < 2) {
      return "application/octet-stream";
    }

    const extension = parts[parts.length - 1];

    if (mimeTypes[extension]) {
      return mimeTypes[extension];
    } else {
      return "application/octet-stream";
    }  
  }

  document.getElementById("btnq3").addEventListener("click", function () {
    const filename = prompt("Enter filename (e.g., style.css):");
    const mime = mimeFromFilename(filename);
    document.getElementById("q3").textContent = mime;
  });
});
