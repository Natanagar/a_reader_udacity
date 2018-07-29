import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'
import { Route} from 'react-router-dom'
import './App.css'
import { Switch} from 'react-router'


class BookApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books : books })
    })
 }
updateBook = (book, shelf) => {
  book.shelf = shelf;
  BooksAPI.update(book, shelf)
  this.setState(state => ({
    books: state.books.filter((oldBook => oldBook.id !== book.id)
    ).concat([book])
  }))
}

  
  render(){
    return (
      
        <Switch>
            <Route exact path="/">
                <div className="app">
                    <MainPage 
                    books = {this.state.books}
                    updateShelf={this.updateBook.bind(this)}
                  />
                 </div>
            </Route>
            <Route path="/search">
              <SearchPage 
                books = {this.state.books}
                updateShelf={this.updateBook.bind(this)}
              />
            </Route>
           
        </Switch>
       
     
    );
  }
}
export default BookApp;
