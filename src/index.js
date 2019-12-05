import '../src/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={ store() }>
    <Router history={ createBrowserHistory() }>
      { renderRoutes(Routes) }
    </Router>
  </Provider>,
  document.getElementById('root')
);
