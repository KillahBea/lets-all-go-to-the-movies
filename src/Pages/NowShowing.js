import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/Hellboy-2019.jpg'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import MovieListItem from '../components/MovieListItem.js'
import MoviePoster from '../components/MoviePoster.js'
import HeroImage from '../components/HeroImage.js'
import { arrayExpression } from '@babel/types'
import { random } from 'node-forge'

class NowShowing extends Component {
  state = {
    movies: [],
    posters: [],
    randomNumber: null
  }

  componentDidMount = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=3e1239d3f60a8ef521253cad48c6f629&language=en-US&page=1'
    )
      .then(resp => resp.json())
      .then(results => {
        let posterArray = results.results.map(item => {
          return item.poster_path
        })
        this.setState({
          movies: results.results,
          posters: posterArray,
          randomNumber: Math.floor(Math.random() * posterArray.length)
        })
      })
  }
  render() {
    return (
      <>
        <NavBar />
        <div className="hero-image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${this.state.posters[this.state.randomNumber]}`}
          />
        </div>
        <div className="bullshirt">
          {this.state.movies.map((movies, index) => {
            return (
              <section>
                <MovieListItem key={index} movies={movies.title} />
                <Link to={`/movie/${movies.id}`}>
                  <MoviePoster poster={movies.poster_path} />
                </Link>
              </section>
            )
          })}
        </div>
        <Footer />
      </>
    )
  }
}

export default NowShowing
