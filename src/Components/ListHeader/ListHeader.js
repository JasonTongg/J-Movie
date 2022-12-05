import React from 'react';
import bg from '../../Assets/background.jpg';
import {Container} from './Style';

export default function ListHeader() {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,.2), black), url("${bg}")`,
      }}
    >
      <h3>Movie</h3>
    </Container>
  );
}
