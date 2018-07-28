import React, {Component} from 'react'
import Rating from './Rating'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI'

function Book(props){
let changeHandleShelf = (event) => {
    //console.log(props.id);
    props.onBookChange(props, event.target.value)};
        return(
           
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url('${props.imageLinks.thumbnail}')` }}>
                            </div>
                                <div className="book-shelf-changer">
                                    <select value = {props.shelf} onChange={changeHandleShelf}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                        <div className="book-title">{props.title}</div>
                    <div className="book-authors">{props.author}</div>
                <div className="book-authors">{props.publisher}</div>
            <Rating />
        </div>
    )
}


Book.propTypes = {
    shelf: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.array,
    publisher: PropTypes.string,
    onBookChange : PropTypes.func

}
export default Book;
    
/*    //updateBook = (book, shelf) => {
//  BooksAPI.update(book, book.shelf).then((data) => {
//    let result = this.state.books.filter((filtered) => filtered.id !== book.id)
//      this.setState({ books: [...this.state.books, changedBook] });
//        });
//}*/

