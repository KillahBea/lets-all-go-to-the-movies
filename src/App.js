import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movies from './Pages/Movies'

import NowShowing from './Pages/NowShowing.js'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={NowShowing} />
            <Route path="/movie/:movieID" component={Movies} />
            <Movies />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
