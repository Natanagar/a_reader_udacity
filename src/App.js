import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import BookShelf from './BookShelf'
import Rating from './Rating'

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
 
  createBook(books) {
      this.setState(state => ({
        books: state.books.concat([ books ])
      })
    )
  }
  
  render() {
    const firstObject = this.state.books[6];
    console.log(firstObject);
    

    return (
     
      <div className="app">
        <MainPage />
      </div>
    );
  }
}
export default BooksApp;
