import React from 'react';
import Book from './Book';

const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.filter((book) => (book.shelf === props.shelf)).map((book) => (
          <li key={book.id}>
            <Book book={book} onUpdateBook={props.onUpdateBook} />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default Bookshelf;