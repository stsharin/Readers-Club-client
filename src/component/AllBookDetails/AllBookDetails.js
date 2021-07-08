import React, { useEffect, useState } from 'react';
import Bar from '../Bar/Bar';
import BookDetails from '../BookDetails/BookDetails';

const AllBookDetails = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Bar />
                <div className="col py-3">
                    <table className="table">
                        <thead className="p-5 m-5" style={{ backgroundColor: '#1d5ca0' }}>
                            <tr className="" style={{ color: 'white' }}>
                                <th><h5>Name</h5></th>
                                <th><h5>Email</h5></th>
                                <th><h5>Book Name</h5></th>
                                <th><h5>Author</h5></th>
                                <th><h5>Quantity</h5></th>
                                <th><h5>Price</h5></th>
                                <th><h5>Action</h5></th>
                            </tr>
                        </thead>
                        <tbody className="p-5" style={{ backgroundColor: '#e1dee2' }}>
                            {
                                order.map(order => <BookDetails order={order}></BookDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBookDetails;