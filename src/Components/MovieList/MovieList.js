import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase, API_KEY } from "../../NetworkConnections"
import SingleMovie from "../SingleMovie/SingleMovie";

export default function MovieList(props){
    const [movies, setMovies] = useState([])
    useEffect(() =>{
        fetchMoviesFromDatabase(props.list, props.query)
            .then(res => setMovies(res.results));
    },[])
    if(movies.length > 0 && !movies[0].poster_path)
    movies.map(function (movie){
        fetch(`https://api.themoviedb.org/3/find/${movie.id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`)
        .then(res => {
            console.log(res.json())
        })
    })
    return <div className="movie-list-container"> 
        <h2>{props.title}</h2>
        <div className='movie-list'>
            {movies.map(movie => <SingleMovie movie={movie.id}/>)}

        </div>
    
    
    </div>

}