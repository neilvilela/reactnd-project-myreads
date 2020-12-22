import React from 'react';
import LinkButton from './LinkButton';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = {
    query: "",
    results: []
  };

  /**
   * Search books in Udacity books API and update the search results.
   */
  searchBooks = (searchQuery) => {
    this.setState((_prevState) => ({
      query: searchQuery
    }));

    BooksAPI.search(searchQuery)
      .then((response) => {
        this.setState((_prevState) => ({
          results: response && !response.error ? response.map((b) => (this.handleCorrectBookshelf(b))) : []
        }));
      });
  };

  /**
   * If a book exists in any bookshelf, return that book instead of the search result.
   * @param {object} responseBook - A single book object returned from the search endpoint.
   */
  handleCorrectBookshelf = (responseBook) => (
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

Search.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default Search;