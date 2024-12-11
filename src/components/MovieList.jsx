import React from 'react'
import { useMovie } from '../MovieContext'
import {API_KEY, BASE_URL, IMAGE_BASE_URL, unavailable} from '../api'
import {useNavigate} from 'react-router-dom'

const MovieList = () => {
    const {movies,page, setPage} = useMovie();
    const navigate = useNavigate();
  return (
    <div className="container">
      {movies && movies.map((movie) => (
        <div key={movie.id} className="card" onClick={() => navigate(`/${movie.id}`)}>
          <img src={ movie.poster_path ? `${IMAGE_BASE_URL}/${movie.poster_path}` : unavailable} alt={movie.title} />
          {/* <h2>{movie.title}</h2> */}
        </div>
      ))
      }
      <div className="pagination">
      <button 
      
      onClick={page > 1 ?() => setPage(page - 1) : 1}>Previous</button>
      {page}
      <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default MovieList