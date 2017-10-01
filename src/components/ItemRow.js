import React, { PropTypes } from 'react';

const ItemRow = ({item}) => {
    return (
        <tr>
            <td><label>{item.id}</label></td>
            <td><input type="number" name="quanity" value = {item.quantity} /></td>
            <td><input type="number" name="Price" value = {item.price}/></td>
            <td><input type="button" className="btn btn-sm btn-danger" value="remove" /></td>
            <td><label>{item.quantity * item.price}</label></td>
        </tr>
    );
};

export default ItemRow;