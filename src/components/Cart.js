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
        debugger;
        const { items } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">{<ItemList items={items} />}</div>
                    <div className="col-sm-4 col-md-4 col-lg-4">Cart summary</div>
                </div>
            </div>
        );
    }
}


Cart.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
