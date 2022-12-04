import React from 'react';
import {useSelector} from 'react-redux';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {SwiperContent, Content} from './Style';

export default function Swiper() {
  let data = useSelector((state) => state.movie.moviePopular).slice(0, 4);

  SwiperCore.use([Autoplay]);
  return (
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
          <SwiperContent
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), black), url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
          >
            <Content>
              <h2>{item.original_title}</h2>
              <p>{item.overview}</p>
              <div className="buttons">
                <button className="red">Watch Now</button>
                <button className="white">Watch Later</button>
              </div>
            </Content>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
          </SwiperContent>
        </SwiperSlide>
      ))}
    </Swipe>
  );
}
