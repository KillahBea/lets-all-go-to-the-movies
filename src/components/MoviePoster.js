import React, { Component } from 'react'

class MoviePoster extends Component {
  render() {
    return (
      <>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`} />
      </>
    )
  }
}

export default MoviePoster
