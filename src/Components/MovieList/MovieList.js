import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase } from "../../NetworkConnections"
import SingleMovie from "../SingleMovie/SingleMovie";

export default function MovieList(props) {
    const [movies, setMovies] = useState(props.movies);
    useEffect(() => {
        if (movies) return
        fetchMoviesFromDatabase(props.list)
            .then(res => setMovies(res.results));

    }, [])

    useEffect(() => {
        setMovies(props.movies)
    }, [props.movies])


    return <div className='movie-list-container'>
        <h2>{props.title}</h2>
        <div className='movie-list'>
            {movies?.map(movie => <SingleMovie key={movie.id} movie={movie} genres={props.genres} setShowMovie={props.setShowMovie} showMovie={props.showMovie} />)}

        </div>
    </div>

}