import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ItemRow from './ItemRow';

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
                <ul className="list-group">
                    {[1, 2, 3, 4].map((i) => <ItemRow key={i} />)}
                </ul>
            </div>
        );
    }
}

export default Cart;