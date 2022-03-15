import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase } from "../../NetworkConnections"

export default function SingleMovie(props){
    const [movie, setMovie] = useState(props.movie)
    const [movies, setMovies] = useState([])
    const [searchName, setSearchName] = useState('')
    useEffect(() =>{
        if(movie) return
        fetchMoviesFromDatabase(`movie/${props?.id}`)
            .then(res => setMovie(res))
    },[])
    
    return <div className='single-movie'>
        <h3>{movie?.original_title}</h3>
        {movie && <img alt={`poster for ${movie?.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>}
        <p>{movie?.overview}</p>
        
        
    </div>
} 