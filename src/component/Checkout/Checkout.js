import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [])

    return (
        <div className="container col-md-6">
            <div>
                <h2 className="mt-5"><strong>Checkout</strong></h2>

                <div className="shadow rounded mt-3 p-5">
                    <table class="table table-borderless">
                        <thead className="border-bottom text-secondary">
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{book.name}</td>
                                <td>1</td>
                                <td>{book.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button className="btn mt-3" style={{ float: 'right', backgroundColor: '#1d5ca0', color: 'white' }}>Checkout</button>
        </div>
    );
};

export default Checkout;