import { Link } from 'react-router-dom'
import {useMovie} from '../MovieContext'
const Header = () => {
  const {searchQuery, setSearchQuery} = useMovie()
  const {toggleTheme, theme} = useMovie()

  const searchMovies = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }

  return (
    <div className='header'>
        {/* logo */}
        <h2>MovieApp</h2>

        {/* menu  */}
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/tv'>TV</Link>
            <Link to='/series'>Series</Link>
        </nav>

        {/* search */}
        <div className='search-icon'>
            <input type='text' placeholder='Search...' value={searchQuery} onChange={searchMovies} />
            {/* <button>Search</button> */}
            <button className="icon-button" onClick={toggleTheme} >
            {theme ? '🌞' : '🌜'}
        </button>
        </div>

        {/* darkmode */}
       
    </div>
  )
}

export default Header