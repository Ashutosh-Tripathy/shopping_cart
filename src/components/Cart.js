import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ItemList from './ItemList';
import CartSummary from './CartSummary';
import toastr from 'toastr';

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: Object.assign({}, this.props.state.items)
        };
        this.updateItemQuantity = this.updateItemQuantity.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    updateItemQuantity(event) {
        const field = event.target.name;
        let items = this.props.state.items;
        items.filter(item => item.id == event.target.id)[0][field] = event.target.value;
        return this.setState({ items: items });
    }

    deleteItem(event) {
        let items = this.props.state.items;
        for (let i = items.length - 1; i >= 0; i--) {
            if (items[i].id == event.target.id) items.splice(i, 1);
        }
        toastr.success('Course deleted');        
        return this.setState({ items: items });
    }
    render() {
        const { state } = this.props;
        return (
            <div>
                <h1>Cart</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">{<ItemList items={this.props.state.items} onQuantityChange={this.updateItemQuantity} onDeleteItem={this.deleteItem} />}</div>
                    <div className="col-sm-4 col-md-4 col-lg-4">{<CartSummary items={this.props.state.items} />}</div>
                </div>
            </div>
        );
    }
}


Cart.propTypes = {
    state: PropTypes.object.isRequired
};

Cart.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
