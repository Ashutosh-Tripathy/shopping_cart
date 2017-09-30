import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import items from './itemReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
    courses,
    authors,
    items,
    ajaxCallsInProgress
});

export default rootReducer;