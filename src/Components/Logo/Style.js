import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 320px) {
    flex-direction: column;
  }

  svg {
    font-size: 2.5rem;
  }

  h2 {
    margin: 0;
    font-size: 2rem;

    @media only screen and (max-width: 280px) {
      font-size: 1.5rem;
    }
  }
`;
