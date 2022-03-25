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
        <h1>Fabulous Flix</h1>
        <SearchBar title='search'  />
        <SingleMovie id='14736'/>
        
      <div className='movie-preview'>
        <ReactPlayer url ='https://www.youtube.com/watch?v=ahy17q1vEWw'/>
        </div>  

        <MovieList list='trending/movie/week'/>
      </div>
    </GenreContext.Provider>

  );
}

export default App;
