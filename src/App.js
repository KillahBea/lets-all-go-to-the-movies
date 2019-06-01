import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NowShowing from './Pages/NowShowing.js'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={NowShowing} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
