import styled, {keyframes} from 'styled-components';

let show = keyframes`
    from{
        transform: translateY(-30px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Container = styled.div``;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  gap: 1rem;

  h2 {
    color: white;
    opacity: 0;
    animation: ${show} 0.5s forwards;
    text-align: center;
    position: relative;
  }

  iframe {
    width: 700px;
    height: 400px;
    opacity: 0;
    animation: ${show} 0.5s forwards 0.2s;

    @media only screen and (max-width: 700px) {
      width: 500px;
      height: 350px;
    }

    @media only screen and (max-width: 500px) {
      width: 300px;
      height: 200px;
    }

    @media only screen and (max-width: 300px) {
      width: 250px;
      height: 200px;
    }

    @media only screen and (max-width: 250px) {
      width: 200px;
      height: 150px;
    }
  }
`;
