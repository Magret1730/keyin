import React from 'react';
import Book from './Book';

const books = [
    { title: "Java Programming", author: "Ivor Horton" }, 
    { title: "HTML & CSS", author: "Tim Berner’s Lee" }, 
    { title: "React JS", author: "A.Kurdi" },
    { title: "Angular JS", author: "R. Lafore II" },
];

const BookList = () => {
  return (
    <>
        {books.map((book, index) => (
          <Book key={index} title={book.title} author={book.author} />
        ))}
    </>
  )
}

export default BookList;