import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { Provider } from 'react-redux';
import store from '../src/store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);