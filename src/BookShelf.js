import React, { Component } from 'react'
import App from './App'
import Book from './Book'



    const BookShelf = (books) => {
        console.log(books);
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                <Book />
                            </li>
                        </ol>
                    </div>
            </div>
        )
            
    }
    

export default BookShelf;