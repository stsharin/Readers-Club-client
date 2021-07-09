import React, { useEffect, useState } from 'react';
// import bookData from '../FakeData/FakeData.json'
import Book from '../Book/Book'

const TotalBooks = () => {
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

    const [bookData, setBookData] = useState([]);

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
                    {/* <button onClick={addAllBooks}>Add Books</button> */}
                    {
                        bookData.map(b => <Book book={b}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TotalBooks;