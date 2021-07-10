import React, { useEffect, useState } from 'react';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://young-dusk-28666.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    return (

        <div className="container col-md-9">

            <div className="d-flex justify-content-center shadow m-5 p-2">
                <div className=" mt-5 mb-5" style={{ width: '90%' }}>
                    <h3 className="mb-3 mt-2 text-secondary">My Order List</h3>
                    <table className="table table-borderless" >
                        <thead>
                            <tr style={{ backgroundColor: '#80c58f', color: 'white' }}>
                                <th><h5>Book Name</h5></th>
                                <th><h5>Author</h5></th>
                                <th><h5>Quantity</h5></th>
                                <th><h5>Price</h5></th>

                            </tr>
                        </thead>
                        <tbody style={{ color: '#000099', backgroundColor: '#e5f3e8' }}>
                            {
                                myOrders.length === 0 && <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }
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