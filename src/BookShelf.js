import React, { Component } from 'react'
import MainPage from './MainPage'
import Book from './Book'


    const BookShelf = (props) => {
    
        return(
           
                <div className="bookshelf">
                    
                        <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {props.books.map(book =>
                                        <li key={book.id} >
                                        <Book {...book} />
                                    </li>
                                    )}
                                    
                                
                            </ol>
                        </div>
                      
                </div> 
        ) 
    }
    

export default BookShelf;