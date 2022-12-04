import React from 'react';
import {Nav} from './Style';
import Logo from '../Logo/Logo';

export default function Navbar() {
  return (
    <Nav>
      <Logo></Logo>
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Series</li>
      </ul>
    </Nav>
  );
}
