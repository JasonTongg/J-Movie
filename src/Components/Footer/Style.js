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

  p {
    text-align: center;
    font-size: 1.3rem;

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 800px) {
    padding-bottom: 150px;
  }

  svg {
    font-size: 4rem;

    @media only screen and (max-width: 300px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3rem;
    @media only screen and (max-width: 300px) {
      font-size: 2rem;
    }
  }

  li:hover {
    color: #7a0000;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-block: 3rem;

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
