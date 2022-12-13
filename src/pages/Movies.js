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
            <div className="movies__navbar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo"/>
            </div>
            <div className="movie__jumbotron">
                <div className="movie__content">
                <h3>{movieData.length?movieData[0].movieList[14].title:""}</h3>
                <p style={{ color: "var(--lighter-grey)" }}><span>{movieData.length?movieData[0].movieList[14].release_date.slice(0,4):""}</span>|
                    <span>{movieData.length?movieData[0].movieList[14].adult?"U/A 16+":"U/A 13+":""}</span>|
                    <span>2h 27min</span>|
                    <span>{movieData.length?movieData[0].movieList[14].genre_ids.map((el)=>{
        return movieGenre.filter(item=>item.id === el)[0].name
    }).join(", "):""}</span>
                </p>
                <p>{movieData.length?movieData[0].movieList[14].overview:""}</p>
                <button className="watch__now">▶ Play</button>
                <button className="trailer">More Info</button>
                </div>
                <div className="movie__hero"
                // style={{
                //     background: movieData.length?`url(https://image.tmdb.org/t/p/w500${movieData[0].movieList[0].backdrop_path})`:"",
                //     backgroundPosition: "center",
                //     backgroundSize: "cover",
                //     backgroundRepeat: "no-repeat"
                // }}
                >
                    {/* <img src={movieData.length?`https://image.tmdb.org/t/p/original${movieData[0].movieList[6].poster_path}`:""} alt="poster"/> */}
                    <img src={movieData.length?`https://image.tmdb.org/t/p/w500${movieData[0].movieList[14].backdrop_path}`:""} alt="poster"/>
                    <div className="layover3"></div>
                </div>
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