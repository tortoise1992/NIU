import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {reducer} from './store/redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store=createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
