import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import {Container} from './Style';
import {useSelector} from 'react-redux';
import {Swiper as Swipe, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/components/pagination/pagination.min.css';

export default function Details() {
  let videos = useSelector((state) => state.movie.details.video);
  SwiperCore.use([Navigation]);
  return (
    <MainLayout type="detail">
      <Container>
        <h3>Trailer</h3>
        <Swipe
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation]}
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index}>
              <iframe
                title={item.name}
                width="100%"
                height="700px"
                src={`https://www.youtube.com/embed/${item.key}?controls=0`}
                key={index}
              ></iframe>
            </SwiperSlide>
          ))}
        </Swipe>
      </Container>
    </MainLayout>
  );
}
