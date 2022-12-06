import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (max-width: 320px) {
    height: 200px;
  }

  h3 {
    color: white;
    font-size: 2rem;
  }
`;
