import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase } from "../../NetworkConnections"
import SingleMovie from "../SingleMovie/SingleMovie";
import MovieList from "../MovieList/MovieList";

export default function SearchBar(props){
    
    const [movies, setMovies] = useState([])
    const [searchName, setSearchName] = useState('')
    
    function searchMovies(){
        fetchMoviesFromDatabase(`search/multi`, `&query=${searchName}`)
            .then(res => setMovies(res.results))
    }
        
        
    
    function handleChange(event){
        setSearchName(event.target.value)
    }
    console.log(searchName)
    return <div>
        <h1>SearchBar</h1>
        <input value={searchName} onChange={handleChange}></input>
        <input onClick={searchMovies} type= 'submit'/>
        <MovieList title = {props.title} movies ={movies} genres ={props.genres}/>


        {/* <h2>{props.title}</h2>
        <div className='movie-list'>
            {movies.map(movie => <SingleMovie key={movie.id}movie={movie}/>)}

        </div> */}
    
        
        
    </div>
} 