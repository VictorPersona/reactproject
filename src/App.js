import { useState, useEffect } from 'react'

import './App.css'
import SearchIcon from './search.svg'

import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=292c0ea0'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setsearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('One Piece')
  }, [])

  const movie1 = {
    Title: 'John Wick',
    Year: '2014',
    imdbID: 'tt2911666',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
  }

  return (
    <div className="app">
      <h1>Movie Mania</h1>
      <div className="search">
        <input
          placeholder="Search for Movie"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="SearchIcon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  )
}

export default App
