import {combineReducers, createStore, applyMiddleware} from 'redux';
import progressBarReducer from './taskReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {watchGetMoney} from "../saga/pollingSaga";




const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    progressBarPage: progressBarReducer,
});
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(watchGetMoney);

window.store = store;

export default store;


