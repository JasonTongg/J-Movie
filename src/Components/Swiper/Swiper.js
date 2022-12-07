import React from 'react';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {SwiperContent, Content} from './Style';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import {video} from '../../Redux/movies';

export default function Swiper() {
  let {data, isLoading} = useSelector((state) => state.movie.moviePopular);
  data = data.slice(0, 4);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  SwiperCore.use([Autoplay]);

  let toDetails = (id) => {
    navigate(`/details/movie/${id}`);
  };

  let fetchVideo = (id) => {
    dispatch(video({id, type: 'movie'}));
  };

  if (isLoading) {
    return (
      <Swipe grabCursor={true} spaceBetween={0} slidesPerView={1}>
        <SwiperSlide>
          <SwiperContent
            style={{
              width: '100%',
              height: '700px',
              justifyItems: 'center',
              gridTemplateColumns: '1fr',
            }}
          >
            <ClipLoader
              color={'#ffffff'}
              loading={isLoading}
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
          {({isActive}) => (
            <SwiperContent
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), black), url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
              }}
              className={isActive ? 'active' : ''}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <Content className={isActive ? 'active' : ''}>
                <h2>{item.original_title}</h2>
                <p>
                  {window.innerWidth > 600
                    ? item.overview
                    : item.overview.slice(0, 200) + '...'}
                </p>
                <div className="buttons">
                  <button className="red" onClick={() => toDetails(item.id)}>
                    Watch Now
                  </button>
                  <button className="white" onClick={() => fetchVideo(item.id)}>
                    Watch Trailer
                  </button>
                </div>
              </Content>
            </SwiperContent>
          )}
        </SwiperSlide>
      ))}
    </Swipe>
  );
}
