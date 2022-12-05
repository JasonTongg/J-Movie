import React from 'react';
import {Nav} from './Style';
import Logo from '../Logo/Logo';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {discoverVariable} from '../../Redux/movies';

export default function Navbar() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let disp = (type) => {
    dispatch(discoverVariable({page: 1, type}));
  };

  return (
    <Nav>
      <Logo onClick={() => navigate('/')} />
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li
          onClick={() => {
            disp('movie');
            navigate('/List');
          }}
        >
          Movies
        </li>
        <li
          onClick={() => {
            disp('tv');
            navigate('/List');
          }}
        >
          TV Series
        </li>
      </ul>
    </Nav>
  );
}
