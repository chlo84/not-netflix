import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase } from "../../NetworkConnections"

export default function SingleMovie(props){
    const [movie, setMovie] = useState(props.movie)
    useEffect(() =>{
        if(movie)return
        fetchMoviesFromDatabase(`movie/${props?.id}`)
            .then(res => setMovie(res))
    },[])
    return <div className="movie-card">
        <h1>{movie?.original_title}</h1>
        {movie && <img alt={`poster for ${movie?.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>}
        
        
        
    </div>
} 