import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 8rem;
  align-items: center;

  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }

  .more {
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
  }
`;

export const Search = styled.form`
  display: flex;
  width: 100%;

  input {
    background-color: rgba(255, 255, 255, 0.1);
    border: 0;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    color: white;
    outline: none;
    width: 300px;

    @media only screen and (max-width: 400px) {
      width: 100%;
    }
  }

  button {
    border-radius: 50px;
    background: #7a0000;
    color: white;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    transform: translateX(-20px);
    cursor: pointer;
    transition: all 0.3s ease-out;
    font-weight: bold;

    &:hover {
      background-color: black;
      color: #7a0000;
      transform: scale(1.1) translateX(-20px);
      border: 1px solid #7a0000;
    }
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
