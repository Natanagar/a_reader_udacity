import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import BookShelf from './BookShelf'

//import Book from './Book'
import './App.css'
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books : books })
    })
    
  }
  

  render() {
    console.log(this.state.books);
    return (
     
      <div className="app">
        <MainPage />
      </div>
    );
  }
}
export default BooksApp;
