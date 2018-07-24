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
//updateBook = (book, shelf) => {
//  BooksAPI.update(book, book.shelf).then((data) => {
//    let result = this.state.books.filter((filtered) => filtered.id !== book.id)
//      this.setState({ books: [...this.state.books, changedBook] });
//        });
//}
  
  render() {
    
    //console.log(this.state.books);
    return (
      <div className="app">
        <MainPage 
        books = {this.state.books}/>
      </div>
    );
  }
}
export default BooksApp;
