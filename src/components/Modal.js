import "./Modal.css"
import { movieGenre } from "../data"
const Modal = ({ setModal, movie }) => {
    return <section className="modal__section">
        <div className="layover" onClick={() => { setModal(false) }}></div>
        <div className="movie__details">
            <div className="movie__info">
                <h3>{movie.title}</h3>
                <p style={{ color: "var(--lighter-grey)" }}><span>{movie.release_date.slice(0, 4)}</span>|
                    <span>{movie.adult ? "U/A 16+" : "U/A 13+"}</span>|
                    <span>2h 27min</span>|
                    <span>{movie.genre_ids.map((el) => {
                        return movieGenre.filter(item => item.id === el)[0].name
                    }).join(" , ")}</span>
                </p>
                <p>{movie.overview}</p>
                <button className="watch__now">Watch Now</button>
                <button className="trailer">▶   Trailer</button>
            </div>
            <div className="movie__poster"
                style={{
                    background: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="layover2">

                </div>
                {/* <img src="https://image.tmdb.org/t/p/original/9z4jRr43JdtU66P0iy8h18OyLql.jpg" alt="Troll"/> */}
            </div>
        </div>
    </section>
}

export default Modal
// backdrop_path: "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg"
// genre_ids: (3) [14, 28, 12]
// id: 736526
// original_language: "no"
// original_title: "Troll"
// overview: "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?"
// popularity: 5282.337
// poster_path: "/9z4jRr43JdtU66P0iy8h18OyLql.jpg"
// release_date: "2022-12-01"
// title: "Troll"
// video: false
// vote_average: 6.8
// vote_count: 541