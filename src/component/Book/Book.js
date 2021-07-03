import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {

    const book = props.book;
    const { name, writer, image, price } = book;

    return (
        <div className="col-md-4 mb-5 col d-flex justify-content-center">
            <div className="p-3 rounded shadow h-100" style={{ width: '20rem' }}>
                <img className="img-fluid p-3 rounded" style={{ backgroundColor: '#f0f0ef' }} src={image} alt="" />
                <div className="mt-3">
                    <h5>{name}</h5>
                    <p>{writer}</p>
                </div>
                <div className="mb-5 mt-3">
                    <h4 style={{ float: 'left', color: '#6650e4' }}>{price}</h4>
                    <Link to="/checkout"><button className="btn" style={{ float: 'right', backgroundColor: '#6650e4', color: 'white' }}>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Book;