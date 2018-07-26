import React, { Component } from 'react'
import MainPage from './MainPage'
import Book from './Book'
import PropTypes from 'prop-types';


    const BookShelf = (props) => { 
        return(
         
                <div className="bookshelf">
                    
                        <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {props.books.map(book =>
                                        <li key={book.id} >
                                        <Book {...book} 
                                        onBookChange={props.moveBook}/>
                                    </li>
                                    )}
                                    
                                
                            </ol>
                        </div>
                      
                </div> 
        ) 
    }
BookShelf.propTypes = {
    books: PropTypes.array,
    moveBook: PropTypes.func,
    children: PropTypes.element.isRequired
}    

export default BookShelf;