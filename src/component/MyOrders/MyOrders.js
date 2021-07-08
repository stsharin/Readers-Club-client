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
                    <h3 className="mb-3 mt-3">My <span style={{color: '#ff7400'}}>Order List</span></h3>
                    <table className="table" style={{border: '1px solid #ff7400'}}>
                        <thead>
                            <tr style={{backgroundColor: '#c4c0c5'}}>
                                <th><h5>Book Name</h5></th>
                                <th><h5>Author</h5></th>
                                <th><h5>Quantity</h5></th>
                                <th><h5>Price</h5></th>
                            
                            </tr>
                        </thead>
                        <tbody style={{ color: '#000099' }}>
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