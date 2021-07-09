import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Checkout = () => {

    const { id } = useParams();
    const [book, setBook] = useState({});
    const history = useHistory();

    const user = JSON.parse(localStorage.getItem('user'));

    const [orderDetails, setOrderDetails] = useState({
        userName: user.name,
        email: user.email
    })

    const handleCheckout = (e) => {
        e.preventDefault();
        console.log(orderDetails);
        fetch('https://young-dusk-28666.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your order is placed successfully');
                history.replace('/');
            })

    }

    useEffect(() => {
        fetch(`https://young-dusk-28666.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data);
                const newOrderDetails = { ...orderDetails }
                newOrderDetails.name = data.name
                newOrderDetails.quantity = data.quantity
                newOrderDetails.price = data.price
                newOrderDetails.writer = data.writer
                setOrderDetails(newOrderDetails);
            })
    }, [])

    return (
        <div className="container col-md-6">
            <div>
                <h3 className="mt-5 mb-3 text-secondary">Checkout</h3>

                <div className="shadow rounded mt-3 p-5">
                    <table class="table table-borderless">
                        <thead className="border-bottom text-secondary">
                            <tr>
                                <th scope="col">Book Name</th>
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
                    <h5><hr/>Total Price : <span className="text-success">{book.price}</span></h5>
                </div>
            </div>
            <button onClick={handleCheckout} className="btn mt-3" style={{ float: 'right', backgroundColor: '#1d5ca0', color: 'white' }}>Checkout</button>
        </div>
    );
};

export default Checkout;