import React, {useCallback} from 'react';
import {Buttons} from './Style';

export default function Button({children, action}) {
  let jalankan = useCallback(() => {
    action();
  }, [action]);

  return <Buttons onClick={jalankan}>{children}</Buttons>;
}
