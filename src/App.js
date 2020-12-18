import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' component={Search} />
          <Route exact path='/' component={List}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
