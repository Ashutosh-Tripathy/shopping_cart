import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ItemList from './ItemList';
import CartSummary from './CartSummary';

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const { items } = this.props;
        return (
            <div>
                <h1>Cart</h1>
                
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">{<ItemList items={items} />}</div>
                    <div className="col-sm-4 col-md-4 col-lg-4">{<CartSummary />}</div>
                </div>
            </div>
        );
    }
}


Cart.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
