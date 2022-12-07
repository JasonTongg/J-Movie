import styled, {keyframes} from 'styled-components';

let show = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const SwiperContent = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: flex-start;
  justify-content: center;
  align-content: center;
  padding: 4rem;
  gap: 4rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: 450px) {
    padding: 2rem;
  }

  img {
    width: 300px;
    justify-self: flex-end;
    border-radius: 40px;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }

  &.active img {
    opacity: 0;
    animation: ${show} 0.7s forwards 0.5s;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  color: white;
  width: 70%;

  @media only screen and (max-width: 1100px) {
    width: 90%;
  }

  &.active h2 {
    opacity: 0;
    animation: ${show} 0.7s forwards 0.7s;
  }
  &.active p {
    opacity: 0;
    animation: ${show} 0.7s forwards 0.9s;
  }
  &.active .buttons {
    opacity: 0;
    animation: ${show} 0.7s forwards 1.1s;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 4rem;
    line-height: 4rem;

    @media only screen and (max-width: 600px) {
      font-size: 3rem;
      line-height: 3rem;
      text-align: center;
    }

    @media only screen and (max-width: 400px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  p {
    @media only screen and (max-width: 600px) {
      text-align: justify;
    }
    @media only screen and (max-width: 300px) {
      display: none;
    }
  }

  .buttons {
    display: flex;
    gap: 1rem;

    @media only screen and (max-width: 350px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    button {
      padding: 0.5rem 1.5rem;
      border-radius: 1000px;
      outline: none;
      color: white;
      font-weight: bold;
      cursor: pointer;
      font-size: 1.1rem;
    }

    .red {
      background-color: #7a0000;
      border: 1px solid #7a0000;
      transition: all 0.5s ease-out;

      &:hover {
        background-color: transparent;
        color: #7a0000 !important;
        transform: scale(1.1);
      }
    }

    .white {
      padding: 0.5rem 1rem;
      border: 1px solid white;
      color: white;
      font-size: 1.1rem;
      border-radius: 100px;
      background-color: transparent;
      outline: none;
      transition: all 0.5s ease-out;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: white;
        color: black !important;
        transform: scale(1.1);
      }
    }
  }
`;
