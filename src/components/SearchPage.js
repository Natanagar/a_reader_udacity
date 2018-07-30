import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class SearchPage extends Component{
static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}
state = {
    foundbooks : [],
    showSearchPage: false, 
    query : ''
 }
 updateQuery=(query)=>{
    this.setState({
        query : query
    })
    this.getFoundBook(query);
 }
 getFoundBook = (query)=>{
    if(query && query.length>2){
        BooksAPI.search(query).then(foundbooks =>{
            if (foundbooks.error || typeof(foundbooks)== "undefined") {
                this.setState({ foundbooks : [] });
            } else foundbooks.map(book=>{
                //compare value of shelf with value of shelf in mainpage
                let booksOnTheMainPage = this.props.books;
                    booksOnTheMainPage.map(oldBook=>{
                        if(oldBook.shelf !== book.shelf){
                            book.shelf === oldBook.shelf 
                        } else { book.shelf = "none"}
                    })

            }) 
                this.setState({ foundbooks : foundbooks })
            }
        ) 
    } else {this.setState({ foundbooks : [] })};
} 
render(){
    console.log(this.props);
    let showBooks
        let {books, onBookChange} = this.props
        let { foundbooks, query } = this.state
    
        if(query){
            const match = new RegExp(escapeRegExp(query), 'i');
            showBooks = foundbooks.filter((book)=>match.test(book.author));
        } else {
            showBooks = foundbooks;
        }
    
    showBooks.sort(sortBy('author'));
    return(
        
            <div className="search-books">

                    <div className="search-books-bar">
        
                        <Link className="close-search"  to="/" title="Back to My Reads" >
                            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                        </Link>
                            <div className="search-books-input-wrapper">
                                <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event)=>this.updateQuery(event.target.value)}
                                />
                            </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.foundbooks.map((book)=>
                                <li key={book.id} >
                                <Book {...book} 
                                onBookChange={this.props.updateShelf} />
                                </li>
                            )}
                        </ol>
                    </div>
            </div>
        )
    }
        
} 
export default SearchPage;