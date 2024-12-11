import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import { useMovie } from '../MovieContext'

const TV = () => {
const {fetchMovies, searchQuery} = useMovie();
  const type = searchQuery ? '/search/tv' : '/discover/tv'
  const genre = ''
  fetchMovies(type, searchQuery, genre)

  return (
    <MovieList />
  )
}

export default TV