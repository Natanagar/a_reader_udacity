import React, {Component} from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class MainPage extends Component{


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
    
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            ;
              <div>
                    <BookShelf books={this.currentlyReadingBooks()} 
                    bookShelfTitle='Currently Reading'
                    moveBook={this.props.updateShelf}/>
                    <BookShelf books={this.wantToRead()} 
                    bookShelfTitle='Want to read'
                    moveBook={this.props.updateShelf}/>
                    <BookShelf books={this.read()} bookShelfTitle='Read'
                    moveBook={this.props.updateShelf}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        );
    }
}
MainPage.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func
}         
export default MainPage;