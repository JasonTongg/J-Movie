import React, {useRef} from 'react';
import Footer from '../Components/Footer/Footer';
import {Container} from './Style';
import Header from '../Components/Header/Header';
import Swiper from '../Components/Swiper/Swiper';
import DetailHeader from '../Components/DetailHeader/DetailHeader';
import ListHeader from '../Components/ListHeader/ListHeader';

export default function MainLayout({type, children, title, onClick}) {
  return (
    <Container>
      <Header
        content={
          type === 'home' ? (
            <Swiper onClick={onClick}></Swiper>
          ) : type === 'detail' ? (
            <DetailHeader></DetailHeader>
          ) : (
            <ListHeader title={title}></ListHeader>
          )
        }
      ></Header>
      {children}
      <Footer />
    </Container>
  );
}
