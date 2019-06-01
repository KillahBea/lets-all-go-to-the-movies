import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/Hellboy-2019.jpg'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import MovieListItem from '../components/MovieListItem.js'

class NowShowing extends Component {
  state = {
    movies: []
  }

  componentDidMount = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=3e1239d3f60a8ef521253cad48c6f629&language=en-US&page=1'
    )
      .then(resp => resp.json())
      .then(results => {
        console.log(results)
        this.setState({
          movies: results.results
        })
      })
  }

  render() {
    return (
      <>
        <NavBar />
        {/* <div className="hero-image">
          <span className="hero-graphic" />
        </div> */}
        <div classname="bullshirt">
          {this.state.movies.map((movies, index) => {
            return <MovieListItem key={index} movies={movies.title} />
          })}
        </div>
        <Footer />
      </>
    )
  }
}

export default NowShowing
