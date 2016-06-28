import React from 'react'
import { Route, IndexRoute, DefaultRoute } from 'react-router'
import App from './containers/App'
import About from './components/About'
import Home from './components/Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={Home}/>
  </Route>
)
