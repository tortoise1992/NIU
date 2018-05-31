import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {reducer} from './store/redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store=createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
