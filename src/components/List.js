import React from 'react';
import LinkButton from './LinkButton';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

const List = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf title="Currently Reading" onUpdateBook={props.onUpdateBook} books={props.books} shelf="currentlyReading" />
        <Bookshelf title="Want to Read" onUpdateBook={props.onUpdateBook} books={props.books} shelf="wantToRead" />
        <Bookshelf title="Read" onUpdateBook={props.onUpdateBook} books={props.books} shelf="read" />
      </div>
    </div>
    <div className="open-search">
      <LinkButton to='/search'>Add a book</LinkButton>
    </div>
  </div>
);

List.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default List;