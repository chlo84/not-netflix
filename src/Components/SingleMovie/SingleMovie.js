import { useEffect, useState, useContext } from "react"
import { fetchMoviesFromDatabase, GenreContext } from "../../NetworkConnections"



export default function SingleMovie(props){
    const [movie, setMovie] = useState(props.movie)
    const [movies, setMovies] = useState([])
    const [searchName, setSearchName] = useState('')
    const genres = useContext(GenreContext)[movie?.original_title ? 1 : 0]
   

    // console.log(genres)
    
    useEffect(() =>{
        if(movie) return
        fetchMoviesFromDatabase(`movie/${props?.id}`)
            .then(res => setMovie(res))
        
    },[])
    console.log(props.showMovie)
    // console.log(movie?.genres_ids)
    // Grab the genre name based on genre id
    
    // find a genre with an id same as movie.genre_id
    return <div className='single-movie'>
        <h3>{movie?.original_title || movie?.original_name}</h3>
        {movie && <img alt={`poster for ${movie?.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>}
        {/* <p>{movie?.overview}</p> */}
        <p>{movie?.genre_ids?.map(genre_id => <p>{genres?.find(genre => genre.id === genre_id)?.name}</p>)}</p> 
        <button onClick = {()=> props.setShowMovie(movie)}>show movie</button>
        
            
       
    </div>
} 