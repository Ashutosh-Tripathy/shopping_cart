import ItemRow from './ItemRow';
import React, { PropTypes } from 'react';

const ItemList = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                    {[1, 2, 3, 4].map((i) => <ItemRow key={i} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;