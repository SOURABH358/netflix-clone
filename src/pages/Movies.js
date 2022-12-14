import { useState, useEffect } from "react";
import MovieRow from "../components/MovieRow.js";
import axios from "axios";
import { movieGenre } from "../data"
import Modal from "../components/Modal.js";
import Footer from "../components/Footer.js";
const Movies = () => {
    const [modal, setModal] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            try {
                let data = movieGenre.map(async (item)=>{
                    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${item.id}`)
                    return {id: item.id, title: item.name, movieList: response.data.results}
                })
                // discover/tv?api_key=${process.env.API_KEY}&with_networks=213
                const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`)
                // console.log(response.data.results)
                data.unshift({id: 1, title: "Netflix Originals", movieList: res.data.results})
                Promise.all(data).then(val=>{
                    setMovieData(val)
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        getMovies();
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
                    <span>3h 10min</span>|
                    <span>Science Fiction, Action & Adventure</span>
                </p>
                <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
                <button className="watch__now">▶ Play</button>
                <button className="trailer">More Info</button>
                </div>
                <div className="movie__hero">
                    <img src="/images/avatar__poster.jpg" alt="avatar__poster"/>
                    
                    <div className="layover3"></div>
                </div>
            </div>
            {movieData.length ? movieData.map(movie => {
                if (!movie.id) { return "" }
                return (
                    <MovieRow key={movie.id}
                        genreId={movie.id}
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
                <Footer/>
        </section>
    )
}
export default Movies;