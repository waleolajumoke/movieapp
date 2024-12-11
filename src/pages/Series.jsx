import { useEffect, useState } from 'react'
import {API_KEY, BASE_URL, IMAGE_BASE_URL} from '../api'
import MovieList from '../components/MovieList'
import { useMovie } from '../MovieContext'

const Series= () => {

  const {fetchMovies, searchQuery} = useMovie();
  const type = searchQuery ? '/search/tv' : '/discover/tv'
  const genre = '&with_genres=10765'
  fetchMovies(type, searchQuery, genre)


  return (
    <MovieList />
  )
}

export default Series