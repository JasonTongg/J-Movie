import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: flex-start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  gap: 4rem;
  padding-top: 4rem;
  padding: 4rem;

  img {
    justify-self: flex-end;
    width: 300px;
    border-radius: 40px;
  }
`;

export const Content = styled.div`
  color: white;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 4rem;
    line-height: 4rem;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    gap: 1rem;
    flex-wrap: wrap;

    li {
      padding: 0.3rem 1rem;
      border: 2px solid white;
      border-radius: 20px;
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
    }
  }

  .casts {
    width: 100%;
    .content {
      width: 80px;
      position: relative;
      cursor: pointer;

      img {
        width: 80px;
        border-radius: 20px;
      }

      .posterOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 0.65rem;
        padding: 2rem;
        box-sizing: border-box;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-out;
      }

      &:hover .posterOverlay {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
