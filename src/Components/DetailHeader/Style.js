import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(500px, 1fr) minmax(500px, 1.5fr);
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

  @media only screen and (max-width: 940px) {
    grid-template-columns: minmax(500px, 1fr);
    justify-items: center;
  }

  @media only screen and (max-width: 600px) {
    min-height: 0;
    height: fit-content;
  }

  @media only screen and (max-width: 350px) {
    height: 750px;
  }

  @media only screen and (max-width: 300px) {
    height: 500px;
  }

  .poster {
    justify-self: flex-end;
    width: 300px;
    border-radius: 40px;

    @media only screen and (max-width: 940px) {
      justify-self: center;
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
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
  padding: 2rem;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 4rem;
    line-height: 4rem;
    text-align: center;

    @media only screen and (max-width: 500px) {
      font-size: 3rem;
      line-height: 3.2rem;
    }

    @media only screen and (max-width: 300px) {
      font-size: 2rem;
      line-height: 2.1rem;
    }
  }

  p {
    @media only screen and (max-width: 400px) {
      text-align: justify;
    }

    @media only screen and (max-width: 300px) {
      display: none;
    }
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
    width: 100%;

    @media only screen and (max-width: 300px) {
      justify-content: center;
    }

    li {
      padding: 0.3rem 1rem;
      border: 2px solid white;
      border-radius: 20px;
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
    }
  }

  h3 {
    @media only screen and (max-width: 400px) {
      display: none;
    }
  }

  .casts {
    width: 100%;

    @media only screen and (max-width: 400px) {
      display: none;
    }

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
