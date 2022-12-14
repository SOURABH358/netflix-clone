import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Scrollbar, A11y } from "swiper";
import { BsChevronCompactRight } from "react-icons/bs";
import 'swiper/css';
import './MovieRow.css';
const MovieRow = ({genre, movieList, setModal, setCurrentMovie}) =>{
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const handleSelect = (movie)=>{
        setModal(true);
        setCurrentMovie(movie)
    }
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
    return <div className="movie__list">
        <h3>{genre + " Movies"}</h3>
        <Swiper className="swiper__container"
    onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    modules={[Navigation, Pagination, A11y]}
    allowTouchMove={false}
    spaceBetween={50}
    grabCursor={false}
    draggable={false}
    loop={true}
    breakpoints={{
        1440: {
            slidesPerView: 5,
            spaceBetween:10,
            slidesPerGroup: 5
        },
        980:{
            slidesPerView:4,
            spaceBetween:10,
            slidesPerGroup: 4
        },
        640:{
            slidesPerView:3,
            spaceBetween: 10,
            slidesPerGroup: 3
        },
        480:{
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 3
        }
    }}
    // navigation={{
    //     prevEl:prevRef.current,
    //     nextEl: nextRef.current
    // }}
    pagination={{clickable:true}}
    preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
  >
    {movieList?.map(movie=>{
        const img = movie.poster_path?`https://image.tmdb.org/t/p/original/${movie.poster_path}`:
        `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
        return (
            movie.backdrop_path?<SwiperSlide className="swiper__slide" onClick={()=>handleSelect(movie)}>
                <div><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt = {movie.title}/></div>
                <p>{movie.title}</p>
            </SwiperSlide>:null
        )
    })}
    {/* <div id = "pre" className="btns" ref={prevRef}><BsChevronCompactLeft/></div> */}
    <div id = "next" className="btns" ref={nextRef}><BsChevronCompactRight/></div>
  </Swiper>
  
  </div>
}

export default MovieRow;