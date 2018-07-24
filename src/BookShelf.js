import React, { Component } from 'react'
import App from './App'
import MainPage from './MainPage'
import Book from './Book'


    const BookShelf = ({books}) => {
    let booksForShelf = books.slice();
    
        console.log(books);
        console.log(booksForShelf);
        return(
           
                <div className="bookshelf">
                    
                        <h2 className="bookshelf-title">{books.map(book => book.shelf)}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map(book =>
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