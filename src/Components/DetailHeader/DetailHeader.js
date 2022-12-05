import React from 'react';
import {useSelector} from 'react-redux';
import {Container, Content} from './Style';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';

export default function DetailHeader() {
  let {details: data, isLoading} = useSelector((state) => state.movie);

  if (isLoading) {
    return <h1 style={{color: 'white'}}>loading....</h1>;
  }

  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), black), url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`,
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.original_title || data.original_name}
      />
      <Content>
        <h2>{data.original_title}</h2>
        <ul>
          {data.genres.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <p>{data.overview}</p>
        <h3>Casts</h3>
        <div class="casts">
          <Swipe
            grabCursor={true}
            spaceBetween={50}
            slidesPerView={(window.innerWidth / 250).toFixed(2)}
          >
            {data.credits
              .filter((item) => item.profile_path)
              .map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="content">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      alt={item.original_name}
                      key={item.id}
                      className="cast"
                    />
                    <div className="posterOverlay">
                      <h3>{item.original_title || item.original_name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swipe>
        </div>
      </Content>
    </Container>
  );
}
