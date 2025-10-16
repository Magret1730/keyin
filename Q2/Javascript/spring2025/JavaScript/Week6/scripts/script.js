window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { title: "Post1", author: "Author1", body: "This is post1 body" },
    { title: "Post2", author: "Author2", body: "This is post2 body" },
    { title: "Post3", author: "Author3", body: "This is post3 body" },
  ];

  // 1. Use callback functions...
  // function createPost(post, cb) {
  //   setTimeout(function () {
  //     posts.push(post);
  //     //add the given post... tothe posts array on the top
  //     cb(); //this cb will be called once all functionality is completed...
  //   }, 3000);
  // }

  // function getPosts() {
  //   setTimeout(function () {
  //     posts.forEach(function (post) {
  //       // document.querySelector("#output").innerText += post.title;

  //       document.querySelector(
  //         "#output"
  //       ).innerHTML += `Title: ${post.title} <br/>
  //       Author: ${post.author} <br/>
  //       Body: ${post.body}<br/>----------------<br/>
  //       `;
  //     });
  //   }, 1000);
  // }

  // createPost(
  //   { title: "Post4", author: "Author4", body: "This is post4 body" },
  //   getPosts
  // );

  // 2. Now we would like to solve this problem with promises

  function createPost(post) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 3000);
    });
  }

  function getPosts() {
    setTimeout(function () {
      posts.forEach(function (post) {
        // document.querySelector("#output").innerText += post.title;

        document.querySelector(
          "#output"
        ).innerHTML += `Title: ${post.title} <br/>
        Author: ${post.author} <br/>
        Body: ${post.body}<br/>----------------<br/>
        `;
      });
    }, 1000);
  }

  createPost({ title: "Post4", author: "Author4", body: "This is post4 body" })
    .then(() => {
      getPosts();
    })
    .catch();
});
