import React from 'react';
import {Logo as Log} from './Style';
import {RiMovie2Line} from 'react-icons/ri';

export default function Logo({onClick}) {
  return (
    <Log onClick={onClick}>
      <RiMovie2Line></RiMovie2Line>
      <h2>J-Movie</h2>
    </Log>
  );
}
