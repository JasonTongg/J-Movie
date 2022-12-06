import React from 'react';
import {Container, Header} from './Style';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {useNavigate} from 'react-router-dom';

import ClipLoader from 'react-spinners/ClipLoader';

export default function MovieList({title, data, type}) {
  let navigate = useNavigate();

  let dataa = data.data?.filter((item) => item.poster_path).slice(0, 10);

  let toDetails = (id) => {
    navigate(`/details/${type}/${id}`);
  };

  let showMore = () => {
    navigate(`/list/${title}`);
  };

  if (data.loading) {
    return (
      <Container>
        <Header>
          <h3>{title}</h3>
          <button>View More</button>
        </Header>

        <ClipLoader
          color={'#ffffff'}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <button onClick={showMore}>View More</button>
      </Header>

      <Swipe
        grabCursor={true}
        spaceBetween={window.innerWidth > 500 ? 50 : 20}
        slidesPerView={(window.innerWidth / 250).toFixed(2)}
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
