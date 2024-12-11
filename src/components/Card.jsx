import {API_KEY, BASE_URL, IMAGE_BASE_URL} from '../api'
import { useNavigate } from 'react-router-dom'
import { useMovie } from '../MovieContext'

const Card = (movie) => {
  
  return (
    <div key={movie.id} className="card" onClick={() => navigate(`/${movie.id}`)}>
    <img src={`${IMAGE_BASE_URL}/${movie.poster_path}`} alt={movie.title} />
    {/* <h2>{movie.title}</h2> */}
  </div>
  )
}

export default Card