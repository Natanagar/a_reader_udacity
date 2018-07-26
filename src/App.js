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
 updateBook(book, shelf){
  console.log(book, shelf);
    BooksAPI.update().then(()=>
    BooksAPI.getAll())
      .then((books)=>
      {this.setState({books: books})}
  )
}

  
  render() {
    return (
      
        <Switch>
            <Route exact path="/">
                <div className="app">
                    <MainPage 
                    books = {this.state.books}
                    updateShelf={this.updateBook}
                  />
                 </div>
            </Route>
            <Route path="/searchpage">
              <SearchPage 
                books = {this.state.books}
                updateShelf={this.updateBook}
              />
            </Route>
           
        </Switch>
       
     
    );
  }
}
export default BookApp;
