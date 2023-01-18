import React from 'react'
import './BookList.css'

const BookList = ({ books, deleteBook }) => {
    console.log(books)
    return books.map(book => (
        <div className='row' key={book.id}>
            <div className='tr'>
                <div className='t-data'>
                    <p>{book.title}</p>
                </div>
                <div className='t-data'>
                    <p>{book.author}</p>
                </div>
                <div className='t-data remove-icon'>
                    <p>{book.isbn}</p><span onClick={() => deleteBook(book.isbn)}>X</span>
                </div>
            </div>
        </div>

    ))
}

export default BookList
