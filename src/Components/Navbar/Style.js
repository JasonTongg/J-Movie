import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  gap: 2rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (max-width: 800px) {
    justify-content: center;
    padding-block: 2.5rem;
  }

  ol {
    list-style: none;
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2rem 4rem;

    @media only screen and (max-width: 800px) {
      display: flex;
      padding: 2rem;
    }

    @media only screen and (max-width: 440px) {
      padding: 2rem 1rem;
    }

    li {
      font-weight: bold;
      cursor: pointer;
      border: 4px solid transparent;
      cursor: pointer;
      font-size: 1.5rem;

      @media only screen and (max-width: 440px) {
        font-size: 1.2rem;
      }

      @media only screen and (max-width: 370px) {
        font-size: 1rem;
        text-align: center;
      }

      &:hover,
      &.active {
        border-bottom: 4px solid #7a0000;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media only screen and (max-width: 800px) {
      display: none;
    }

    li {
      font-weight: bold;
      cursor: pointer;
      border: 4px solid transparent;
      cursor: pointer;
      font-size: 1.5rem;

      &:hover,
      &.active {
        border-bottom: 4px solid #7a0000;
      }
    }
  }
`;
