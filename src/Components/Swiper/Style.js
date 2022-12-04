import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), black);
  top: 0;
  left: 0;
`;
