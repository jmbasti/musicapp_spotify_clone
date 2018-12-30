import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
// REACT-ROUTER
import { Router } from 'react-router-dom';
import history from './history';

// REACT-REDUX
import { Provider } from 'react-redux';
// REDUX
import { createStore, applyMiddleware, compose } from 'redux';
// REDUX-THUNK
import reduxThunk from 'redux-thunk';
// REDUCERS
import reducers from './reducers/index';
// ANIMATE.CSS
import 'animate.css';
// STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
