import React from 'react';
import BookActions from './BookActions';

const Book = (props) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : ''}")` }}></div>
      <BookActions book={props.book} onUpdateBook={props.onUpdateBook} />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors}</div>
  </div>
)

export default Book;