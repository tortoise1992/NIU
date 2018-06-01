import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Login from './container/login/login'
import Reg from './container/reg/reg'
import registerServiceWorker from './registerServiceWorker';
const store=createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/login' component={Login}></Route>
      <Route path='/reg' component={Reg}></Route>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
