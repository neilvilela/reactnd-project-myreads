import React from 'react'
import LinkButton from './LinkButton'
import Bookshelf from './Bookshelf'

const List = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf title="Currently Reading" books={props.books.filter((book) => (book.shelf === 'currentlyReading'))} />
        <Bookshelf title="Want to Read" books={props.books.filter((book) => (book.shelf === 'wantToRead'))}/>
        <Bookshelf title="Read" books={props.books.filter((book) => (book.shelf === 'read'))}/>
      </div>
    </div>
    <div className="open-search">
      <LinkButton to='/search'>Add a book</LinkButton>
    </div>
  </div>
)

export default List