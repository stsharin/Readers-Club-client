import React from 'react';
import { useHistory } from 'react-router-dom';

const BookDetails = (props) => {

    const order = props.order;
    const { _id, userName, email, name, writer, quantity, price } = order;
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteOrder/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('Order is deleted successfully.')
            history.replace('/')
        })
    }

    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{writer}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default BookDetails;