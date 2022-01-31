import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import DocumentReducer from './reducers/DocumentReducer';
import UserReducer from './reducers/UserReducer';

const reducer = {
    user: userReducer,
}
const rootReducer = combineReducers({
    DocumentReducer,
    UserReducer
});

const store = configureStore({
    reducer: reducer,
    rootReducer,
})

export default store
//import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import thunkMiddleware from 'redux-thunk';
//import DocumentReducer from './reducers/DocumentReducer';
//import userReducer from './reducers/UserSlice'

//const rootReducer = combineReducers({
//    DocumentReducer,
//    userReducer,
//});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(
//    rootReducer,
//    composeEnhancers(applyMiddleware(thunkMiddleware))
//);

//export default store;