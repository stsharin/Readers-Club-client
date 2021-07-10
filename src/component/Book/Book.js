import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {

    const book = props.book;
    const { _id, name, writer, image, price, quantity } = book;

    return (
        <div className="col-md-4 col d-flex justify-content-center mt-5 mb-3">
            <div className="shadow h-100" style={{ width: '20rem' }}>
                <img className="img-fluid" src={image} alt="" />
                <div className="p-3 mb-5">
                    <h5>{name}</h5>
                    <p>{writer}</p>
                    <h4 style={{ float: 'left', color: '#1d5ca0' }}>{price}</h4>
                    <Link to={`/checkout/${_id}`}><button className="btn" style={{ float: 'right', backgroundColor: '#1d5ca0', color: 'white' }}>Buy Now</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Book;