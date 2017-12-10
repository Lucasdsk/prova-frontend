import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pages from './pages'
import './index.scss'

const App = () => (
  <Router>
    <Route component={Pages} />
  </Router>
)

export default App
