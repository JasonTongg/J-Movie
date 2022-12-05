import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import {Container} from './Style';
import {useSelector} from 'react-redux';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import {CgArrowsExchangeAlt} from 'react-icons/cg';
import MovieList from '../../Components/MovieList/MovieList';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Details() {
  let {data: videos, isLoading: videoLoading} = useSelector(
    (state) => state.movie.detailsVideo
  );
  let {data: similar, isLoading: similarLoading} = useSelector(
    (state) => state.movie.detailsSimilar
  );

  SwiperCore.use([Autoplay]);

  return (
    <MainLayout type="detail">
      <Container>
        <Swipe
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={1}
          modules={[Autoplay]}
          speed={1200}
          autoplay={{delay: 10000}}
        >
          {videos?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="header">
                <h3>{item.name}</h3>
                <h4>
                  <CgArrowsExchangeAlt /> Drag here
                </h4>
              </div>
              {videoLoading ? (
                <ClipLoader
                  color={'#ffffff'}
                  loading={videoLoading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <iframe
                  title={item.name}
                  width="100%"
                  height="700px"
                  style={{border: 'none'}}
                  src={`https://www.youtube.com/embed/${item.key}?controls=0`}
                  key={index}
                ></iframe>
              )}
            </SwiperSlide>
          ))}
        </Swipe>
        <MovieList
          title="Similar"
          data={{data: similar, loading: similarLoading}}
        />
      </Container>
    </MainLayout>
  );
}
