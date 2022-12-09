import React, {useCallback, useMemo} from 'react';
import {Container, Header} from './Style';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {useNavigate} from 'react-router-dom';
import Buttons from '../WhiteButton/Button';
import Skeleton from '@mui/material/Skeleton';

export default function MovieList({title, data, type}) {
  let navigate = useNavigate();

  let dataa = useMemo(
    () => data.data?.filter((item) => item.poster_path).slice(0, 10),
    [data.data]
  );

  let toDetails = useCallback(
    (id) => {
      navigate(`/details/${type}/${id}`);
      window.scrollTo(0, 0);
    },
    [navigate, type]
  );

  let showMore = useCallback(() => {
    navigate(`/list/${title}`);
  }, [navigate, title]);

  if (data.loading) {
    return (
      <Container>
        <Header>
          <h3>{title}</h3>
          <Buttons>View More</Buttons>
        </Header>
        <Swipe
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={((window.innerWidth - 128) / 250).toFixed(2)}
        >
          {Array.from({length: 6}).map((_, idx) => (
            <SwiperSlide key={idx}>
              <Skeleton
                variant="rounded"
                height={290}
                style={{
                  borderRadius: '30px',
                  width: '100%',
                }}
                sx={{bgcolor: 'grey.900'}}
                animation="wave"
              />
            </SwiperSlide>
          ))}
        </Swipe>
      </Container>
    );
  }

  return (
    <Container style={title === 'Similar' ? {padding: '2rem 0'} : null}>
      <Header>
        <h3>{title}</h3>
        {title === 'Similar' ? null : (
          <Buttons action={showMore}>View More</Buttons>
        )}
      </Header>

      <Swipe
        grabCursor={true}
        spaceBetween={window.innerWidth > 500 ? 40 : 10}
        slidesPerView={((window.innerWidth - 128) / 250).toFixed(2)}
      >
        {dataa?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="content" onClick={() => toDetails(item.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <div className="posterOverlay">
                <p>{item.original_title || item.original_name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swipe>
    </Container>
  );
}
