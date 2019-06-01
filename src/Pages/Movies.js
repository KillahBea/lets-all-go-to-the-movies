import React, { Component } from 'react'

class Movies extends Component {
  state = {
    movie: {},
    cast: []
  }
  componentDidMount = () => {
    let movieID = this.props.match.params.movieID
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=3e1239d3f60a8ef521253cad48c6f629&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(results => {
        console.log(results)
        this.setState({
          movie: results
        })
      })
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=3e1239d3f60a8ef521253cad48c6f629&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(results => {
        this.setState({
          cast: results.cast
        })
      })
  }
  render() {
    return (
      <>
        <h1>{this.state.movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} />
        <p>{this.state.movie.overview}</p>
        <ul>
          {this.state.cast.map(castMember => {
            return (
              <li>
                <h2>{castMember.name}</h2>
                <h3>{castMember.character}</h3>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Movies
