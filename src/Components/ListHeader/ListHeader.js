import React from 'react';
import bg from '../../Assets/background.jpg';
import {Container} from './Style';
import {useParams} from 'react-router-dom';

export default function ListHeader({title}) {
  let {type} = useParams();
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,.2), black), url("${bg}")`,
      }}
    >
      <h3>{type?.toUpperCase() || title}</h3>
    </Container>
  );
}
