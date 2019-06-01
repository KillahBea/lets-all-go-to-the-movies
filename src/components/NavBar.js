import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="nav-bar">
          <Link className="home" to="/">
            <p>HOME</p>
          </Link>
          <Link className="MovieList" to="/MovieList">
            <p>Showing Near You</p>
          </Link>
          <Link className="MovieList" to="/MovieList">
            <p>About</p>
          </Link>
        </nav>
      </>
    )
  }
}

export default NavBar
