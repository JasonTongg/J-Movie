import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem;
  gap: 1rem;

  svg {
    font-size: 6rem;
  }

  h2 {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: normal;
  }

  button {
    padding: 0.5rem 2rem;
    color: white;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 100px;
    outline: none;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
