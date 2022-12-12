import { useContext } from "react";
import { MoviesContext } from "../context/movieContext.js";
import MovieRow from "../components/MovieRow.js";
import {movieGenre} from "../data"
const Movies = () => {
    const { actionMovies } = useContext(MoviesContext);
    console.log(actionMovies)
    return (
        <section className="movies__container">
            <div className="movie__jumbotron">
                <h1>Movies</h1>
            </div>
            {movieGenre.map(movie=>{
                return (
                    <MovieRow 
                    genre= {movie.genre}
                    id={movie.id}
                    />
                )
            })}
        </section>
    )
}
export default Movies;