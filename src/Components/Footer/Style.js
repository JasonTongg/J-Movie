import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 800px) {
    padding-bottom: 150px;
  }

  @media only screen and (max-width: 500px) {
    padding-bottom: 300px;
  }

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

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
      align-items: center;
    }

    li {
      font-weight: bold;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        text-align: center;
      }
    }
  }
`;
