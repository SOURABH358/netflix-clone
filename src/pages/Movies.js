import { useState, useEffect } from "react";
import { MoviesContext } from "../context/movieContext.js";
import MovieRow from "../components/MovieRow.js";
import axios from "axios";
import { movieGenre } from "../data"
import Modal from "../components/Modal.js";
const Movies = () => {
    const [modal, setModal] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movieData, setMovieData] = useState([])
    console.log(movieData)

    useEffect(() => {
        const getMovies = () => {
            try {
                let data = movieGenre.map(async (item)=>{
                    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${item.id}`)
                    return {id: item.id, title: item.name, movieList: response.data.results}
                })
                // const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
                // console.log(response.data.results)
                Promise.all(data).then(val=>{
                    setMovieData(val)
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        getMovies();
        // console.log('rendered')
    }, [])
    return (
        <section className="movies__container">
            <div className="movie__jumbotron">
                <h1>Movies</h1>
            </div>
            {movieData.length ? movieData.map(movie => {
                if (!movie.id) { return "" }
                return (
                    <MovieRow
                        genre={movie.title}
                        movieList={movie.movieList}
                        setModal={setModal}
                        setCurrentMovie={setCurrentMovie}
                    />
                )
            }) : null}

            {modal && <Modal
                setModal={setModal}
                movie={currentMovie} />}
        </section>
    )
}
export default Movies;