import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 8rem;
  align-items: center;

  .more {
    padding: 0.5rem 1rem;
    border: 1px solid white;
    color: white;
    font-weight: bold;
    width: fit-content;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
  }
`;

export const Search = styled.div`
  display: flex;

  input {
    background-color: rgba(255, 255, 255, 0.1);
    border: 0;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    color: white;
    outline: none;
    width: 300px;
  }

  button {
    border-radius: 50px;
    background: red;
    color: white;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    transform: translateX(-20px);
    cursor: pointer;
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding-block: 2rem;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-out;
    padding: 1rem;
    font-weight: 300;
    cursor: pointer;
    font-size: 1.2rem;
  }

  &:hover .overlay {
    visibility: visible;
    opacity: 1;
  }
`;
