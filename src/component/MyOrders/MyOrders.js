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
                {
                    myOrders.map(order => <MySingleOrder order={order}></MySingleOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;