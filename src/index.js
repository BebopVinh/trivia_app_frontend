import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-less/semantic.less'
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<Provider store={ store }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// **add back BrowserRouter
