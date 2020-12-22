import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

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

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Bookshelf;