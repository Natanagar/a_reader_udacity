import React, {Component} from 'react'
import Book from './Book'
import Rating from './Rating'
import BookShelf from './BookShelf'

class MainPage extends Component{

state = {
  nameOfFirstShelf : "currentlyReading",
  nameOfSecondShelf : "wantToRead",
  nameOfThirdShelf : "read"
}  
currentlyReadingBooks(books){
  let listOfCurrentlyReadingBooks = this.props.books
    .filter(book=>book.shelf == "currentlyReading")
    return listOfCurrentlyReadingBooks;
}

wantToRead(books){
  let listOfWantToRead = this.props.books
    .filter(book =>book.shelf == "wantToRead")
    return listOfWantToRead;
}
read(books){
  let readBooks = this.props.books
    .filter(book => book.shelf == "read")
    return readBooks;
}
    render(){
  console.log(this.props.books);  
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            ;
              <div>
                    <BookShelf books={this.currentlyReadingBooks()}/>
                    <BookShelf books={this.wantToRead()}/>
                    <BookShelf books={this.read()}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        );
    }
}
         
export default MainPage;