import React, {useEffect} from 'react';
import MainLayout from '../../Layout/MainLayout';
import {Container} from './Style';
import {useSelector} from 'react-redux';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import {CgArrowsExchangeAlt} from 'react-icons/cg';
import MovieList from '../../Components/MovieList/MovieList';
import ClipLoader from 'react-spinners/ClipLoader';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {detailMovie} from '../../Redux/movies';

export default function Details() {
  let {data: videos, isLoading: videoLoading} = useSelector(
    (state) => state.movie.detailsVideo
  );
  let {data: similar, isLoading: similarLoading} = useSelector(
    (state) => state.movie.detailsSimilar
  );

  let {type, id} = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailMovie({id, type}));
  }, [id, type, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout type="detail">
      <Container style={{paddingInline: '2em'}}>
        <Swipe grabCursor={true} spaceBetween={10} slidesPerView={1}>
          {videos?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="header">
                <h3>{item.name}</h3>
                <h4>
                  <CgArrowsExchangeAlt /> Slide here
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
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '55%',
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    title={item.name}
                    style={{
                      border: 'none',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                    }}
                    src={`https://www.youtube.com/embed/${item.key}?controls=0`}
                    key={index}
                  ></iframe>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swipe>
        <MovieList
          title="Similar"
          data={{data: similar, loading: similarLoading}}
          type={type}
          style={{paddingInline: '0 !important'}}
        />
      </Container>
    </MainLayout>
  );
}
