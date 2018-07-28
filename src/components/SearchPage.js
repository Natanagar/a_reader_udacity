import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
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
    if(query){
        BooksAPI.search(query).then(foundbooks => {
            if (foundbooks.error) {
                this.setState({ foundbooks : [] });
            } else {this.setState({ foundbooks : foundbooks })};
            }
        ) 
    }
} 
render(){
    let showBooks
        let {books, onBookChange} = this.props
        let { foundbooks, query } = this.state
        console.log(this.state)
        console.log(this.props)

        if(query){
            const match = new RegExp(escapeRegExp(query), 'i');
            showBooks = foundbooks.filter((book)=>match.test(book.author));
        } else {
            showBooks = foundbooks;
        }
    
    //showBooks.sort(sortBy('author'));
    return(
            <div className="search-books">
                
                    <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
                                onBookChange={this.props.moveBook} />
                                </li>
                            )}
                        </ol>
                    </div>
            </div>
        )
    }
        
} 
export default SearchPage;