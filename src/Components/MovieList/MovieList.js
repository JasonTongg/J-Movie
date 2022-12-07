import React from 'react';
import {Container, Header} from './Style';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {useNavigate} from 'react-router-dom';
import Buttons from '../WhiteButton/Button';
import Skeleton from '@mui/material/Skeleton';

export default function MovieList({title, data, type}) {
  let navigate = useNavigate();

  let dataa = data.data?.filter((item) => item.poster_path).slice(0, 10);

  let toDetails = (id) => {
    navigate(`/details/${type}/${id}`);
    window.scrollTo(0, 0);
  };

  let showMore = () => {
    navigate(`/list/${title}`);
  };

  if (data.loading) {
    return (
      <Container>
        <Header>
          <h3>{title}</h3>
          <Buttons>View More</Buttons>
        </Header>
        <Swipe
          grabCursor={true}
          spaceBetween={window.innerWidth > 500 ? 40 : 20}
          slidesPerView={((window.innerWidth - 128) / 250).toFixed(2)}
        >
          {Array.from({length: 6}).map((_, idx) => (
            <SwiperSlide key={idx}>
              <Skeleton
                variant="rounded"
                width={300}
                height={290}
                style={{
                  borderRadius: '30px',
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
    <Container>
      <Header>
        <h3>{title}</h3>
        <Buttons action={showMore}>View More</Buttons>
      </Header>

      <Swipe
        grabCursor={true}
        spaceBetween={window.innerWidth > 500 ? 40 : 20}
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
