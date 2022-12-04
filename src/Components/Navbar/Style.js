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

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    li {
      font-weight: bold;
      cursor: pointer;
      padding: 0.5rem;
      border: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid red;
      }
    }
  }
`;
