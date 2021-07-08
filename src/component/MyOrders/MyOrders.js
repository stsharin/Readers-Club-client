import React, { useEffect, useState } from 'react';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    return (

        <div className="container">
            <div className="row">
                <div className="">
                    <h3 className="m-5 text-center text-success">My <span className="text-info">Order List</span></h3>
                    <table className="table">
                        <thead>
                            <tr className="" style={{color: '#1d5ca0'}}>
                                <th><h5>Name</h5></th>
                                <th><h5>Email</h5></th>
                                <th><h5>Book Name</h5></th>
                                <th><h5>Author</h5></th>
                                <th><h5>Quantity</h5></th>
                                <th><h5>Price</h5></th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map(order => <MySingleOrder order={order}></MySingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;