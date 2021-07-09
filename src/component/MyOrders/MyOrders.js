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

        <div className="container col-md-8">
            
                <div className="d-flex justify-content-center shadow m-5">
                    <div className=" mt-5 mb-5">
                        <h3 className="mb-3 mt-2" style={{ color: '#ff7400' }}>My Order List</h3>
                        <table className="table table-borderless" style={{width: '50rem'}}>
                            <thead>
                                <tr style={{ backgroundColor: '#ff9d4c' }}>
                                    <th><h5>Book Name</h5></th>
                                    <th><h5>Author</h5></th>
                                    <th><h5>Quantity</h5></th>
                                    <th><h5>Price</h5></th>

                                </tr>
                            </thead>
                            <tbody style={{ color: '#000099', backgroundColor: '#ffe3cc' }}>
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