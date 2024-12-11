import { useEffect, useState } from 'react'
import {API_KEY, BASE_URL, IMAGE_BASE_URL} from '../api'
import{useParams} from 'react-router-dom'

const Detail = () => {
  const [movies, setMovies] = useState([])
  const [trailerKey, setTrailerKey] = useState('')
  // const [showTrailer, setShowTrailer] = useState(false)
  const {id} = useParams()
  useEffect(() => {
    const fetchTrailers = async () => {
      const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
      const data = await response.json()
      setTrailerKey(data.results.find((movie) => movie.type === 'Trailer' && movie.site === 'YouTube') )  
    }
    const fetchDetail = async () => {       
      // const response = https://api.themoviedb.org/3/movie/1241982?api_key=778dcf02894f40ff2a5de48a0a87f49e
      const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      const data = await response.json()
      // console.log(data);
      setMovies(data)
    }
    fetchDetail()
    fetchTrailers()
  }, [])

  return (
    <div className="container">
      <div className='detail-content'>
        <img src={`${IMAGE_BASE_URL}/${movies.poster_path}`} alt={movies.title} />
        <div>
          <h2>{movies.title? movies.title : movies.name}</h2>
          <p>{movies.overview}</p>
          <p>Release Date: {movies.release_date? movies.release_date : movies.first_air_date}</p>
          <p>Rating: {movies.vote_average?.toPrecision(2)}</p>
          <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          {/* {trailerKey ? <button onClick={() => setShowTrailer(true)}>Show Trailer</button>: "No Trailer"} */}
        </div>
      </div>


     
         
       
    </div>
  )
}

export default Detail