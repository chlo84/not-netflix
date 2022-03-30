import logo from './logo.svg';
import './App.css';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';
import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase, GenreContext } from './NetworkConnections'
import ReactPlayer from 'react-player';
import React from 'react';



function App() {
  const [tvGenres, setTvGenres] = useState([])
  const [movieGenres, setMovieGenres] = useState([])
  
  
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
        <h1>Fabulous Flix</h1>
        <a target="_blank" href="http://codepen.io/Moslim/" className="white-mode">Fabulous Flixx</a>
        <SearchBar/>
        </div>
        <ReactPlayer playing={true} muted={true} url ='https://www.youtube.com/watch?v=Ur83i6_BjbE'
        width={1200}
        height={600}
        />
        <SingleMovie id='14736'/>
        <MovieList list='trending/movie/week'/>
      </div>
    </GenreContext.Provider>

  );
}

export default App;
