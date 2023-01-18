import React, { useEffect, useState } from 'react'
import BookList from '../BookList/BookList'

import './ui.css'




const getdataformLs = () => {

    const data = localStorage.getItem('bookList')
    if (data) {
        return JSON.parse(data)
    }
    else {
        return []
    }
}

const Ui = () => {
    // creating data 
    const [bookList, setbookList] = useState(getdataformLs)



    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [isbn, setIsbn] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let books = {
            title,
            author,
            isbn,
        }
        setbookList([...bookList, books]);


        setTitle('')
        setAuthor('')
        setIsbn('')

    }
    //delete book form localstorage
    const deleteBook = (isbn) => {
        const filteredBooks = bookList.filter((element, index) => {
            return element.isbn !== isbn
        })
        setbookList(filteredBooks);
        
    }
    // saving data in localStorage
    useEffect(() => {
        localStorage.setItem('bookList', JSON.stringify(bookList))
    }, [bookList])

    return (

        <div className='Container'>


            <div className='wrapper'>
                <div className='Form'>
                    <h1>Reading BookList</h1>
                    <form style={{ marginTop: '47px' }} onSubmit={handleSubmit} >
                        <div className='title form-item'>
                            <label>Title</label>
                            <br />
                            <input type='text' name='title' placeholder='Enter Reading Book Name'
                                onChange={(e) => setTitle(e.target.value)} value={title}
                            />
                        </div>
                        <div className='author form-item'>
                            <label>Author</label>
                            <br />
                            <input name='author' type='text' placeholder='Enter Book Author Name'
                                onChange={(e) => setAuthor(e.target.value)} value={author}

                            />
                        </div>
                        <div className='isbn form-item'>
                            <label>ISBN#</label>
                            <br />
                            <input name='isbn' type='text' placeholder='Enter Book Isbn#'
                                onChange={(e) => setIsbn(e.target.value)} value={isbn}

                            />

                        </div>
                        <div className='form-item'>
                            <button>Submit</button>
                        </div>
                    </form>


                    <div className='view-section'>
                        {
                            bookList.length > 0 && <>
                                <div className='table'>
                                    <div className='t-head'>
                                        <div className='col-1'>
                                            title
                                        </div>
                                        <div className='col-2'>
                                            author
                                        </div>
                                        <div className='col-3'>
                                            isbn#
                                        </div>
                                    </div>
                                    <br />
                                    <hr />

                                    <div className='t-body'>
                                        <BookList books={bookList} deleteBook={deleteBook} />
                                    </div>
                                </div>



                            </>
                        }

                        {
                            bookList.length < 1 && <div> No book List Yet</div>
                        }
                    </div>




                </div>
            </div>



        </div>
    )
}

export default Ui
