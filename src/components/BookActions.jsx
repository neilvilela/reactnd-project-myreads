import React from 'react'

const BookActions = (props) => (
  <div className="book-shelf-changer">
    <select value={props.book.shelf} onChange={(e) => { props.onUpdateBook(props.book, e.target.value) }}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

export default BookActions