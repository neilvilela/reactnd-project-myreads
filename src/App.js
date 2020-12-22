import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search';
import List from './components/List';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      });
  };

  /**
   * Move books between shelves and update the bookshelves.
   * @param {object} book - Book object to be updated. Must contain at least an id.
   * @param {string} shelf - New shelf where the book is going to move.
   */
  updateBook = (book, shelf) => {
    book.shelf = shelf;

    BooksAPI.update(book, shelf)
      .then((bookList) => {
        this.setState((prevState) => ({
          books: prevState.books.filter((b) => b.id !== book.id).concat(book)
        }))
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search">
            <Search books={this.state.books} onUpdateBook={this.updateBook} />
          </Route>
          <Route exact path="/">
            <List books={this.state.books} onUpdateBook={this.updateBook}/>
          </Route>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp;
