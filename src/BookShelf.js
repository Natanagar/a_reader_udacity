import React, { Component } from 'react'
import App from './App'
import MainPage from './MainPage'
import Book from './Book'



    const BookShelf = ({books}) => {
    
        console.log(books);
        return(
           
                <div className="bookshelf">
                    <h2 className="bookshelf-title">books</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map(book=>
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