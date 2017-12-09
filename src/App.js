import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pages from './pages'
import './index.scss'

import Container from './components/container'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Pages} />
      </Switch>
    </Router>
  )
}

export default App
