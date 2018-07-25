import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'
import Book from './components/Book'
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books : books })
    })
 }
 updateBook(book, shelf){
  console.log(book, shelf);
    BooksAPI.update().then(()=>
    BooksAPI.getAll())
      .then((books)=>
      {this.setState({books: books})}
  )
}

  
  render() {
    
    //console.log(this.state.books);
    return (
      <div className="app">
        <MainPage 
        books = {this.state.books}
        updateShelf={this.updateBook}
        />
      </div>
    );
  }
}
export default BooksApp;
