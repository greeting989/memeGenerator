import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import { fetchMemes } from './actions';
import thunk from 'redux-thunk';
const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=>console.log('store',store.getState()))
store.dispatch(fetchMemes());
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById('root'));