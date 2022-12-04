import React from 'react';
import {Footer as Foo, List} from './Style';
import Logo from '../Logo/Logo';
import bg from '../../Assets/background.jpg';

export default function Footer() {
  return (
    <Foo style={{backgroundImage: `url("${bg}")`}}>
      <Logo></Logo>
      <List>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Term of Services</li>
          <li>About us</li>
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
    </Foo>
  );
}
