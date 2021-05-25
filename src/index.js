import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './App';


const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);