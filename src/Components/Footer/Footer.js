import React from 'react';
import {Footer as Foo, List} from './Style';
import Logo from '../Logo/Logo';
import bg from '../../Assets/background.jpg';
import {Link, useNavigate} from 'react-router-dom';

export default function Footer() {
  let navigate = useNavigate();
  return (
    <Foo
      style={{
        backgroundImage: `linear-gradient(to bottom, black, transparent) ,url("${bg}")`,
      }}
    >
      <Logo></Logo>
      <List>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/List/movie')}>Movies</li>
          <li onClick={() => navigate('/List/tv')}>TV Series</li>
        </ul>
        <ul>
          <li>Live</li>
          <li>FAQ</li>
          <li>Premium</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>You must watch</li>
          <li>Recent Release</li>
          <li>Top Movies and TV Series</li>
        </ul>
      </List>
      <p>
        Make with &hearts; by{' '}
        <a href={'https://www.linkedin.com/in/jason-tong-42600319a/'}>Jason</a>
      </p>
    </Foo>
  );
}
