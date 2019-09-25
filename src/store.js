import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import users from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  users,
  currentUser,
  loginForm
})

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
const composeEnhancer =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
