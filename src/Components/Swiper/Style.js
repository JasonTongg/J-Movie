import styled from 'styled-components';

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
    }

    .red {
      background-color: red;
      border: 1px solid red;
    }

    .white {
      background-color: transparent;
      border: 1px solid white;
    }
  }
`;
