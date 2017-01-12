import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import offers from './offers';

const rootReducer = combineReducers({
    routing: routerReducer,
    offers,
});

export default rootReducer;
