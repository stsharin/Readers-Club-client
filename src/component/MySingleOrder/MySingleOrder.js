import React from 'react';

const MySingleOrder = (props) => {
    const order = props.order;
    const { userName, email, name, writer, quantity, price } = order;

    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{writer}</td>
            <td>{quantity}</td>
            <td>{price}</td>
        </tr>
    );
};

export default MySingleOrder;