import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import {Container} from './Style';
import Header from '../Components/Header/Header';
import Swiper from '../Components/Swiper/Swiper';

export default function MainLayout() {
  console.log(window.location.pathname === '/');
  return (
    <Container>
      <Header
        content={window.location.pathname === '/' ? <Swiper></Swiper> : null}
      ></Header>
      <Outlet />
      <Footer />
    </Container>
  );
}
