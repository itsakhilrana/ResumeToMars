import React from 'react'
import ReactDOM from 'react-dom'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop></ScrollToTop>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
