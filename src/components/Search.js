import React from 'react';
import LinkButton from './LinkButton';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class Search extends React.Component {
  state = {
    query: "",
    results: []
  };


  searchBooks = (searchQuery) => {
    this.setState((_prevState) => ({
      query: searchQuery
    }));

    BooksAPI.search(searchQuery)
      .then((response) => {
        console.log("BOOKS", response)
        this.setState((_prevState) => ({
          results: response && !response.error ? response.map((b) => (this.handleCorrectBookshelves(b))) : []
        }));
      });
  };

  handleCorrectBookshelves = (responseBook) => (
    this.props.books.filter((b) => b.id === responseBook.id)[0] || responseBook
  )

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <LinkButton className="close-search" to='/'>Close</LinkButton>
          <div className="search-books-input-wrapper">
            <input value={this.state.query} onChange={(e) => this.searchBooks(e.target.value)} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map(
              (book) => (
                <li key={book.id}>
                  <p>{this.props.teste}</p>
                  <Book book={book} onUpdateBook={this.props.onUpdateBook} />
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    )
  }
};

export default Search;