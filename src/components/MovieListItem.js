import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MovieListItem extends Component {
  render() {
    return (
      <>
        <h2>{this.props.movies}</h2>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default MovieListItem
