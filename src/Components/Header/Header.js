import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Container} from './Style';

export default function Header({content}) {
  return (
    <Container>
      <Navbar />
      {content}
    </Container>
  );
}
