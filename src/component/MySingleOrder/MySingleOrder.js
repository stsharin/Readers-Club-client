import React from 'react';

const MySingleOrder = (props) => {
    const order = props.order;
    const { userName, email, name, writer, quantity } = order;

    return (
        <div className="col-md-12">
            <div className="d-flex justify-content-center">
                <h3>{userName}</h3><br/>
                <h3>{email}</h3><br/>
                <h4>{name}</h4>
                <h4>{writer}</h4>
                <h4>{quantity}</h4>
            </div>
        </div>
    );
};

export default MySingleOrder;