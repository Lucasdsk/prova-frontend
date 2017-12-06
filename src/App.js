import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pages from './pages'
import './index.scss'

import Container from './components/container'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Pages} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
