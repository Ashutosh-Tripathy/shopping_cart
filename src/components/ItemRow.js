import React, { PropTypes } from 'react';

const ItemRow = ({ item, onQuantityChange }) => {
    debugger;
    return (
        <tr>
            <td><label>{item.id}</label></td>
            <td><input id={item.id} name="quantity" min="1" type="number" value={item.quantity} onChange={onQuantityChange} /></td>
            <td><label name="price" >{item.price}</label></td>
            <td><input type="button" className="btn btn-sm btn-danger" value="remove" /></td>
            <td><label name="amount">{item.quantity * item.price}</label></td>
        </tr>
    );
};

ItemRow.propTypes = {
    item: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired    
};
export default ItemRow;