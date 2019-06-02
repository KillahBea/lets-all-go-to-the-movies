import React, { Component } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import { Link } from 'react-router-dom'

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
        <ScrollToTop />
        <Link to="/">
          <p>Home</p>
        </Link>
        <h1 className="">{this.state.movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} />
        <p>{this.state.movie.overview}</p>
        <ul>
          {this.state.cast.map(castMember => {
            return (
              <li className="cast">
                <p>{castMember.name}</p>
                <p>{castMember.character}</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Movies
