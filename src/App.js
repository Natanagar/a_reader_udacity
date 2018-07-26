import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './App.css'
import { Switch} from 'react-router'
const history = createBrowserHistory();

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
   
    //console.log(this.state.books);
    return (
      <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/">
                <div className="app">
                    <MainPage 
                    books = {this.state.books}
                    updateShelf={this.updateBook}
                  />
                 </div>
            </Route>
            <Route path="/searchpage" component={SearchPage}/>
           
        </Switch>
      </BrowserRouter>  
     
    );
  }
}
export default BookApp;
