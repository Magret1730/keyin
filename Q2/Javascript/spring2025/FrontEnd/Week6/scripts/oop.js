// Let's convert the library.js code which functional programming into Object Oriented Programming! Using the concepts of classes and objects and doing some reall OOP...

window.addEventListener("DOMContentLoaded", function () {
  // In ES5 ES6(modern JS), we use classes(in contrast with "constructor method" which is a legacy way of acheiving OOP in JS..), which are sort of blueprints and we create "objects" to utilize classes' functionalities...

  //   classes can have member variables, member functions etc...class is a combination of "CODE" & "DATA" .. CODE is the functions, DATA are the variables or fields..

  //   one of the very important/special function in class is "constructor" function ...it is used to construct/ create/ instantiate an "OBJECT"

  //   Other than JS, every language has the constructor method's name SAME AS THE CLASS NAME..
  class Book {
    constructor(t, a, i) {
      this.title = t;
      this.author = a;
      this.isbn = i;
    }

    addBookToList(book) {
      if (book.title === "" || book.isbn === "" || book.author === "") {
        this.showAlert("No field shoud be empty", "error");
      } else {
        let row = document.createElement("tr");

        row.innerHTML = `<td>${book.title}</td><td>${book.isbn}</td><td>${book.author}</td><td class="delete" style="cursor:pointer">X</td>`;

        document.querySelector("#list").appendChild(row);
        // this.showAlert("Book Succesfully added", "success");
        this.clearFields();
      }
    }
    clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#isbn").value = "";
      document.querySelector("#author").value = "";
    }
    showAlert(m, c) {
      let p = document.createElement("p");
      p.innerText = m;
      p.className = c;
      p.id = "box";
      document.querySelector("#notify").appendChild(p);

      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }
    deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        let isbn =
          elemToDelete.previousElementSibling.previousElementSibling
            .textContent;
        Store.removeBook(isbn);
        elemToDelete.parentElement.remove();
        this.showAlert("Book succesully removed", "success");
      } else {
        this.showAlert("Wrong area - click on X", "error");
      }
    }

    static testMethod() {
      console.log("I am test method");
    }
  }

  //   Store books permanently untill we remove them form "localStorage"[Its is API in html that uses browser memory to save objects for the session...]

  // we will create a "Store" class that be used to permanently store books in browser memory unless we remvoe them from local storage....

  //   Is it ok to say that nothing from class is useable unless we create object of that class?

  // static members of a class: If any class has "static" members(variables or functions), they "CAN BE ACCESSED" without creating object.

  //   static members are not "object level", rather they are "CLASS LEVEL" members

  class Store {
    // to add a new book to the memory (localStorage)
    static addBook(book) {
      // read the books from memory(if there are any)

      let books = Store.getBooks();

      books.push(book);

      localStorage.setItem("books", JSON.stringify(books));
    }
    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books"));
      }
      return books;
    }
    static displayBooks() {
      let books = Store.getBooks();
      //   each book from books should be displayed on our web page...infact inside the table.. tbody..
      books.forEach((book) => {
        let objBook = new Book();
        objBook.addBookToList(book);
      });
    }
    static removeBook(isbn) {
      let books = Store.getBooks();
      books = books.filter((book) => book.isbn !== isbn);
      localStorage.setItem("books", JSON.stringify(books));
    }
  }

  //   grabbing the form and attaching an event with that...
  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(evt) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    let book = new Book(title, author, isbn);
    // console.log(book);

    book.addBookToList(book); //call addBookToList method of Book class.. and it will create a row on our page....
    book.showAlert("Book Successfully added", "success");
    Store.addBook(book);

    evt.preventDefault();
  }

  this.document.querySelector("#area").addEventListener("click", handleDelete);

  function handleDelete(evt) {
    let book = new Book();
    book.deleteBook(evt.target);
  }

  Store.displayBooks();
});
