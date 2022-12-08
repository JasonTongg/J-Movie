import React, {useRef, useEffect} from 'react';
import {Nav} from './Style';
import Logo from '../Logo/Logo';
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  let navbarRef = useRef();

  useEffect(() => {
    let height;

    if (window.location.pathname === '/') {
      height = window.innerHeight > 800 ? 800 : window.innerHeight;
    } else if (window.location.pathname.toLowerCase().includes('list')) {
      height = 150;
    } else {
      height = window.innerHeight;
      if (window.innerWidth <= 300) {
        height = 500;
      } else if (window.innerWidth <= 350) {
        height = 750;
      } else if (window.innerWidth <= 400) {
        height = 404;
      } else if (window.innerWidth <= 600) {
        height = 589;
        height = height - (0.692 - (600 - window.innerWidth));
      }
    }

    let scrollListener = () => {
      if (window.scrollY > height) {
        navbarRef.current.style.backgroundColor = 'rgba(0,0,0,.5)';
      } else {
        navbarRef.current.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <Nav ref={navbarRef}>
      <Logo onClick={() => navigate('/')} />
      <ul>
        <li
          onClick={() => {
            navigate('/');
          }}
          className={window.location.pathname === '/' && 'active'}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate('/List/tv');
          }}
          className={
            window.location.pathname.toLowerCase() === '/list/tv' && 'active'
          }
        >
          TV Series
        </li>
        <li
          onClick={() => {
            navigate('/List/movie');
          }}
          className={
            window.location.pathname.toLowerCase() === '/list/movie' && 'active'
          }
        >
          Movies
        </li>
      </ul>
      <ol className="mobileNavbar">
        <li
          onClick={() => {
            navigate('/');
          }}
          className={window.location.pathname === '/' && 'active'}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate('/List/tv');
          }}
          className={
            window.location.pathname.toLowerCase() === '/list/tv' && 'active'
          }
        >
          TV Series
        </li>
        <li
          onClick={() => {
            navigate('/List/movie');
          }}
          className={
            window.location.pathname.toLowerCase() === '/list/movie' && 'active'
          }
        >
          Movies
        </li>
      </ol>
    </Nav>
  );
}
