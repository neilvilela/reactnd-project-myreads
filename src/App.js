import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books: books
        }))
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' component={Search} />
          <Route exact path='/'>
            <List books={this.state.books} />
          </Route>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
