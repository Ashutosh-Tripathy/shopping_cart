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
            items: this.props.items.slice()
        };
        this.updateItemQuantity = this.updateItemQuantity.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => ({ items: nextProps.items.slice() }));
    }

    updateItemQuantity(event) {
        let { id, name, value } = event.target;
        toastr.success('Quantity updated');        
        return this.setState((prevState, props) => {
            let items = prevState.items.slice();
            items.map((item) => {
                if (item.id == id) {
                    item[name] = value;
                }
            });
            return { items: items };
        });
    }

    deleteItem(event) {
        let id = event.target.id;
        toastr.success('Item deleted');
        return this.setState((prevState, props) => {
            return { items: prevState.items.filter(item => item.id != id) };
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h1>Cart</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">{<ItemList items={items} onQuantityChange={this.updateItemQuantity} onDeleteItem={this.deleteItem} />}</div>
                    <div className="col-sm-4 col-md-4 col-lg-4">{<CartSummary items={items} />}</div>
                </div>
            </div>
        );
    }
}


Cart.propTypes = {
    items: PropTypes.array.isRequired
};

Cart.contextTypes = {
    router: PropTypes.object
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
