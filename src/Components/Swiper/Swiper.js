import React from 'react';
import {useSelector} from 'react-redux';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {Overlay} from './Style';

export default function Swiper() {
  let data = useSelector((state) => state.movie.moviePopular).slice(0, 4);

  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swipe
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        speed={1200}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt=""
            />
            <Overlay></Overlay>
          </SwiperSlide>
        ))}
      </Swipe>
    </>
  );
}
