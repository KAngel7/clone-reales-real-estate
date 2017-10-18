import * as React from 'react';
import { render } from 'react-dom';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import App from './App/MainRoute';
// import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();