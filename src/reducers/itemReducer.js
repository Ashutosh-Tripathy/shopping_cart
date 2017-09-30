import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
    // debugger;
    switch (action.type) {
        case types.LOAD_ITEMS_SUCCESS:
            debugger;
            return action.items;

        default:
            return state;
    }
}