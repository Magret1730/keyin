window.addEventListener("DOMContentLoaded", function () {
  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(evt) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    addBookToList(title, isbn, author);

    evt.preventDefault();
  }

  function addBookToList(t, i, a) {
    // this function will actually create the row in the table below form...

    if (t === "" || i === "" || a === "") {
      showAlert("No field shoud be empty", "error");
    } else {
      let row = document.createElement("tr");

      row.innerHTML = `<td>${t}</td><td>${i}</td><td>${a}</td><td class="delete" style="cursor:pointer">X</td>`;

      document.querySelector("#list").appendChild(row);
      showAlert("Book Succesfully added", "success");
      clearFields();
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }

  function showAlert(m, c) {
    let p = document.createElement("p");
    p.innerText = m;
    p.className = c;
    p.id = "box";
    document.querySelector("#notify").appendChild(p);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }

  this.document.querySelector("#area").addEventListener("click", handleDelete);

  function handleDelete(evt) {
    deleteBook(evt.target);
  }
  function deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.remove();
      showAlert("Book succesully removed", "success");
    } else {
      showAlert("Wrong area - click on X", "error");
    }
  }
});
