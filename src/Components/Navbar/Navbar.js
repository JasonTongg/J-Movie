import React from 'react';
import {Nav} from './Style';
import Logo from '../Logo/Logo';
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <Nav>
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
