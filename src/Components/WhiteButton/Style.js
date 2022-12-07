import styled from 'styled-components';

export const Buttons = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid white;
  color: white;
  font-size: 1.1rem;
  border-radius: 100px;
  background-color: transparent;
  outline: none;
  transition: all 0.5s ease-out;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: white;
    color: black !important;
    transform: scale(1.1);
  }
`;
