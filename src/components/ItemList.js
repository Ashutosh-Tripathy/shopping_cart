import ItemRow from './ItemRow';
import React, { PropTypes } from 'react';

const ItemList = ({ items }) => {
    debugger;
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((i, j) => <ItemRow key={j} />)}
                </tbody>
            </table>
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};


export default ItemList;