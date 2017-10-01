import ItemRow from './ItemRow';
import React, { PropTypes } from 'react';

const ItemList = ({ items, onQuantityChange }) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, j) => <ItemRow key={j} item={item} onQuantityChange={onQuantityChange} />)}
                </tbody>
            </table>
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onQuantityChange: PropTypes.func.isRequired
};


export default ItemList;