import React from 'react'
import ReactDOM from 'react-dom'
import BookApp from './App'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'
const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <BookApp />
  </BrowserRouter>, document.getElementById('root'))