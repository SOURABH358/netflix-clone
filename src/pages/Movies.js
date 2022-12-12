import { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../context/movieContext.js";
import MovieRow from "../components/MovieRow.js";
import axios from "axios";
import {movieGenre} from "../data"
import Modal from "../components/Modal.js";
const Movies = () => {
    const [modal, setModal] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movieData, setMovieData] = useState([])
    console.log(movieData)
    const getMovies = async (id, name)=>{
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`)
            // const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
            // console.log(response.data.results)
            setMovieData((pre)=>{
                return [
                    ...pre,
                    {title:name,
                    movieList: response.data.results}
                ]
            })
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
                 !movieData.length&&movieGenre.map((item)=>{
                    console.log('fetch')
                    getMovies(item.id, item.name)
                })
    },[])
    return (
        <section className="movies__container">
            <div className="movie__jumbotron">
                <h1>Movies</h1>
            </div>
            {movieData.length?movieData.map(movie=>{
                return (
                    <MovieRow 
                    genre= {movie.title}
                    movieList = {movie.movieList}
                    setModal = {setModal}
                    setCurrentMovie = {setCurrentMovie}
                    />
                )
            }):null}

            {modal&&<Modal/>}
        </section>
    )
}
export default Movies;