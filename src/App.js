import './App.css';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';
import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase, GenreContext } from './NetworkConnections'
import ReactPlayer from 'react-player';
import React from 'react';

// Creating the variables and setting them equal to useState.
// Set a useEffect that takes the API and assigns the information to the variable

function App() {
  const [tvGenres, setTvGenres] = useState([])
  const [movieGenres, setMovieGenres] = useState([])
  const [showMovie, setShowMovie] = useState(null)
  console.log(showMovie)
  useEffect(() => {
    fetchMoviesFromDatabase(`genre/movie/list`)
      .then(res => setMovieGenres(res.genres))
    fetchMoviesFromDatabase(`genre/tv/list`)
      .then(res => setTvGenres(res.genres))
  }, [])

  return (

    <GenreContext.Provider value={[tvGenres, movieGenres]}>

      <div className="App">
        <div className='SearchHeader'>
          <div className='FFtitle'>
            <h1>Fabulous Flix</h1>
          </div>
          <SearchBar />
        </div>
        <ReactPlayer playing={true} muted={true} url='https://www.youtube.com/watch?v=Ur83i6_BjbE'
          width={1200}
          height={600}
        />
        {/* <SingleMovie id='14736'/> */}
        {showMovie?.id ? <div>{showMovie.title}</div> : null}
        <MovieList list='trending/movie/week' setShowMovie={setShowMovie} showMovie={showMovie} />
      </div>
    </GenreContext.Provider>

  );
}

export default App;
