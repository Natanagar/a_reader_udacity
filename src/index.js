import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

ReactDOM.render((
    <BrowserRouter history={history}>
      <Route path= "/" component={App} />
    </BrowserRouter>
  ), document.getElementById('root'))