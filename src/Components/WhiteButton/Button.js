import React from 'react';
import {Buttons} from './Style';

export default function Button({children, action}) {
  let jalankan = () => {
    action();
  };
  return <Buttons onClick={jalankan}>{children}</Buttons>;
}
