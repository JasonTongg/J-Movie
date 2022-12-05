import React from 'react';
import {Container, Header} from './Style';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {detailMovie} from '../../Redux/movies';

export default function MovieList({title, data}) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  data = data.filter((item) => item.poster_path).slice(0, 10);

  let toDetails = (id) => {
    dispatch(detailMovie(id));
    navigate('/details');
  };

  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <button>View More</button>
      </Header>

      <Swipe
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={(window.innerWidth / 250).toFixed(2)}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="content" onClick={() => toDetails(item.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <div className="posterOverlay">
                <h3>{item.original_title || item.original_name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swipe>
    </Container>
  );
}
