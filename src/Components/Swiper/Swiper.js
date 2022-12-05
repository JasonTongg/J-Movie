import React from 'react';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {SwiperContent, Content} from './Style';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {detailMovie} from '../../Redux/movies';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Swiper() {
  let {data, loading} = useSelector((state) => state.movie.moviePopular);
  data = data.slice(0, 4);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  SwiperCore.use([Autoplay]);

  let toDetails = (id) => {
    dispatch(detailMovie({id, type: 'movie'}));
    navigate('/details');
  };

  if (loading) {
    return (
      <Swipe grabCursor={true} spaceBetween={0} slidesPerView={1}>
        <SwiperSlide>
          <SwiperContent
            style={{width: '100%', height: '700px', justifyItems: 'center'}}
          >
            <ClipLoader
              color={'#ffffff'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </SwiperContent>
        </SwiperSlide>
      </Swipe>
    );
  }

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
                <button className="red" onClick={() => toDetails(item.id)}>
                  Watch Now
                </button>
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
