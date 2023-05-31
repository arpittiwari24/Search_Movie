import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_KEY = 'http://www.omdbapi.com?apikey=45f42c68'

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchterm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }



  useEffect( () => {
    searchMovies('Loop')
  }, [])

  return (
    <div className="app">
      <h1>SearchMovies</h1>

      <div className='search'>
        <input placeholder="Search for Movies" value = {searchterm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchterm)}/>
      </div>
      
      {movies.length > 0 ? (
          <div className='container'> 
          {movies.map( (movie) => (
            <MovieCard movie = {movie}/>
          ))}
          </div>
        ): (
          <div className='empty'>
            <h3> NO MOVIES FOUND</h3>
             </div>
        )
      }
    
    </div>
  );
}

export default App;


