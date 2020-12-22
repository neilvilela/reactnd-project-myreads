import React from 'react';
import PropTypes from 'prop-types';

const BookActions = (props) => (
  <div className="book-shelf-changer">
    <select value={props.book.shelf || 'none'} onChange={(e) => { props.onUpdateBook(props.book, e.target.value) }}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

BookActions.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookActions;