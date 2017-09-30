import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ItemList from './ItemList';

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">{<ItemList />}</div>
                    <div className="col-sm-4 col-md-4 col-lg-4">Cart summary</div>
                </div>
            </div>
        );
    }
}

export default Cart;