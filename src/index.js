import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { pomodoroClock } from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ComponentConnectedToRedux from "./container/connectionToRedux";
import logger from 'redux-logger';

const store = createStore(
  pomodoroClock,
  applyMiddleware(logger)
  )

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ComponentConnectedToRedux />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
