import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  svg {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    li {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
