import { createContext, useContext, useEffect, useState } from 'react'
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from './api';

const MovieContext = createContext()

// https://api.themoviedb.org/3/search/movie?api_key=778dcf02894f40ff2a5de48a0a87f49e&query=spiderman
export const MovieProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    // add light and dark kode
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme( !theme);
    }

    const fetchMovies = async (type, searchQuery, genre) => {
            const response = await fetch(`${BASE_URL}${type}?api_key=${API_KEY}${genre}&query=${searchQuery}&page=${page}`)
            const data = await response.json()
            // console.log(data.results);
            setMovies(data.results )
           
      
    }
    useEffect(() => {
        fetchMovies()
    }, [page, searchQuery])
  return (
    <MovieContext.Provider value={{movies, fetchMovies, setSearchQuery, searchQuery, page, setPage, toggleTheme, theme}}>
        {children}
    </MovieContext.Provider>
  )
}

export const useMovie = () => useContext(MovieContext)


