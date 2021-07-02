import React from 'react';
import FakeData from '../FakeData/FakeData.json'
import Book from '../Book/Book'

const TotalBooks = () => {
    return (
        <div className="row">
            {
                FakeData.map(b => <Book book={b}></Book>)
            }
        </div>
    );
};

export default TotalBooks;