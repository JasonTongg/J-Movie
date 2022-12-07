import React, {Fragment} from 'react';
import {Container, Overlay} from './Style';
import ReactDOM from 'react-dom/client';

const Backdrop = () => {
  return <Overlay></Overlay>;
};

const ModalOverlay = () => {
  return <Container>Modal ni boss</Container>;
};

export default function InfoModal() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay></ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
}
