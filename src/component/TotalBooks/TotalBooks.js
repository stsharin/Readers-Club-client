import React from 'react';
import fakeData from '../FakeData/FakeData.json'
import Book from '../Book/Book'

const TotalBooks = () => {

    // adding fakeData to db
    // const addAllBooks = () => {
    //     fetch('http://localhost:5000/addBooks', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakeData)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    return (
        <div className="row">
            {/* <button onClick={addAllBooks}>Add Books</button> */}
            {
                fakeData.map(b => <Book book={b}></Book>)
            }
        </div>
    );
};

export default TotalBooks;