/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Components */
import AppContainer from './App/';
import configureStore from './Redux/Store';
import './index.css';
import rootSaga from './Sagas';

let store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
