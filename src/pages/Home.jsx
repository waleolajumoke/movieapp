import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useMovie } from '../MovieContext'
import MovieList from '../components/MovieList'

const Home = () => {
  const {fetchMovies, searchQuery} = useMovie();

  const type = searchQuery ? '/search/movie' : '/discover/movie'
  const genre = ''
  fetchMovies(type, searchQuery, genre)

  return (
    <MovieList />
  )
}

export default Home