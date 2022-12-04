import React from 'react';
import Footer from '../Components/Footer/Footer';
import {Container} from './Style';
import Header from '../Components/Header/Header';
import Swiper from '../Components/Swiper/Swiper';
import DetailHeader from '../Components/DetailHeader/DetailHeader';

export default function MainLayout({type, children}) {
  console.log(window.location.pathname === '/');
  return (
    <Container>
      <Header
        content={
          type === 'home' ? (
            <Swiper></Swiper>
          ) : type === 'detail' ? (
            <DetailHeader></DetailHeader>
          ) : null
        }
      ></Header>
      {children}
      <Footer />
    </Container>
  );
}
