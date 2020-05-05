import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Intro from './pages/Intro'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main/:questionId">
          <Main />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </Router>
  )
}
