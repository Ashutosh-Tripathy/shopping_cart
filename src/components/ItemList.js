import ItemRow from './ItemRow';
import React, { PropTypes } from 'react';

const ItemList = ({ items }) => {
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
                    {items.map((item, j) => <ItemRow item = {item} key={j} />)}
                </tbody>
            </table>
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};


export default ItemList;