import styled from 'styled-components';

export const SwiperContent = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  justify-items: flex-end;
  padding: 4rem;
  gap: 4rem;

  img {
    width: 300px;
    justify-self: flex-start;
    border-radius: 40px;
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

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 4rem;
    line-height: 4rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.5rem 1.5rem;
      border-radius: 1000px;
      outline: none;
      color: white;
      font-weight: bold;
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
