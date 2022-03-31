import { useEffect, useState, useContext } from "react"
import { fetchMoviesFromDatabase, GenreContext } from "../../NetworkConnections"
import SingleMovie from "../SingleMovie/SingleMovie"


export default function SingleMoviePage(props) {
    const [movie, setMovie] = useState(props.movie)
    const genres = useContext(GenreContext)[movie?.original_title ? 1 : 0]

    useEffect(() => {
        if (movie) return
        fetchMoviesFromDatabase(`movie/${props?.id}`)
            .then(res => setMovie(res))

    }, [])

    return <div className='single-movie'>
        <h3>{movie?.original_title || movie?.original_name}</h3>
        {movie && <img alt={`poster for ${movie?.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />}
        <p>{movie?.overview}</p>
        <p>{movie?.genre_ids?.map(genre_id => <p>{genres?.find(genre => genre.id === genre_id)?.name}</p>)}</p>
    </div>
} 