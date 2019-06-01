import React, { Component } from 'react'

class Movies extends Component {
  state = {
    movie: {}
  }
  componentDidMount() {
    const movieID = this.props.match.params.id
  }

  render() {
    return <div />
  }
}

export default Movies
