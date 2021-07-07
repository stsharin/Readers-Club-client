import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const { id } = useParams();
    const [book, setBook] = useState({});

    const user = JSON.parse(localStorage.getItem('user'));
    const email = user.email;

    const [orderDetails, setOrderDetails] = useState({
        name: book.name,
        quantity: book.quantity,
        price: book.price
    })

    const handleCheckout = (e) => {
        e.preventDefault();
        console.log(orderDetails);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
        .then(res => res.json())
        .then(data => {
            setBook(data);
            const newOrderDetails = {...orderDetails}
            newOrderDetails.name = data.name
            newOrderDetails.quantity = data.quantity
            newOrderDetails.price = data.price
            setOrderDetails(newOrderDetails);
        })
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
                                <td>{book.quantity}</td>
                                <td>{book.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button onClick={handleCheckout} className="btn mt-3" style={{ float: 'right', backgroundColor: '#1d5ca0', color: 'white' }}>Checkout</button>
        </div>
    );
};

export default Checkout;