import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

class SearchPage extends Component{
 state = {
    showSearchPage: false  
 }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>

                        </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        Results
                    </ol>
                </div>
          </div>
        );
    } 
    
}

SearchPage.propTypes = {
    books: PropTypes.array,
    updateShelf: PropTypes.func
}    

export default SearchPage;