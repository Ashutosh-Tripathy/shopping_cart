import React from 'react';
import { Link } from 'react-router';

class CartSummary extends React.Component {
    render() {
        return (
            <div>
                <h3>Cart Summary</h3>
                <p> React, Redux adn React router in es6 for ultra responsive web page.</p>
                <Link to="about" className="btn btn-primary">Checkout</Link>
            </div>
        );
    }
}

export default CartSummary;