import { useContext } from "react";
import { MoviesContext } from "../context/movieContext.js";
const Movies = ()=>{
    const {actionMovies} = useContext(MoviesContext);
    console.log(actionMovies)
    return (
        <h1>Movies</h1>
    )
}
export default Movies;