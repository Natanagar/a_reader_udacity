import React, {Component} from 'react'
import Book from './Book'
import Rating from './Rating'
import BookShelf from './BookShelf'

class MainPage extends Component{
  
    render(){
      //console.log(this.chooseShelf());
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                    <BookShelf />
                    <BookShelf />
                    <BookShelf />
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