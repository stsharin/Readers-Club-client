import React from 'react';

const Checkout = () => {
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
                            
                        </tbody>
                    </table>
                </div> 
            </div>
            <button className="btn mt-3" style={{float: 'right', backgroundColor: '#1d5ca0', color: 'white' }}>Checkout</button>
        </div>
    );
};

export default Checkout;