import { useState, useEffect } from "react";
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
                <h3>Avatar: The Way of Water</h3>
                <p style={{ color: "var(--lighter-grey)" }}><span>2022</span>|
                    <span>U/A 13+</span>|
                    <span>2h 27min</span>|
                    <span>Science Fiction, Action & Adventure</span>
                </p>
                <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
                <button className="watch__now">▶ Play</button>
                <button className="trailer">More Info</button>
                </div>
                <div className="movie__hero">
                    {/* <ReactPlayer className="movie__trailer" 
                    url="https://youtu.be/d9MyW72ELq0"
                    loop={true}
                    playing={true}
                    muted={true}
                    width='100%'
                    height='100%'/> */}
                    <img src="/images/avatar__poster.jpg" alt="avatar__poster"/>
                    
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