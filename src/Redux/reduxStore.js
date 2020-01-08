import {combineReducers, createStore} from 'redux';
import tableReducer from './indicatorReducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const reducers = combineReducers({
    tablePage: tableReducer,
});
const store = createStore(reducers, composeWithDevTools());


window.store = store;

export default store;


