import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productListReducers from './reducers/productReducers';
//import data from './data';


// redux Store


const initialState = {};
//const reducer = (state, action) =>{
    //return {products: data.products}
//}

const reducer = combineReducers({
    productList:productListReducers
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;