import styled from 'styled-components';

export const Container = styled.div`
  width: 100&;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 20px;
    width: fit-content;
    border: 1px solid white;
    color: white;
    gap: 1rem;

    .inputContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      gap: 0.5rem;

      label {
        font-size: 1.3rem;
      }

      input {
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        border-radius: 5px;
      }
    }

    button {
      width: 100%;
      color: black
      background-color: white;
      border-radius: 5px;
      padding: .3rem 1rem;
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
`;
