import React, { useEffect, useState } from 'react';
import Book from '../Book/Book'

const TotalBooks = () => {

    const [bookData, setBookData] = useState([]);

    // adding fakeData to db
    // const addAllBooks = () => {
    //     fetch('https://young-dusk-28666.herokuapp.com/addBooks', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(bookData)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }


    // fetching the all book data from server
    useEffect(() => {
        fetch('https://young-dusk-28666.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBookData(data))
    }, [])

    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    {
                        bookData.length === 0 && <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        bookData.map(b => <Book book={b}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TotalBooks;