import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: white;
  padding: 2rem 8rem;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem 2rem;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    width: 200px;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      border-radius: 30px;
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
      font-size: 1.2rem;
      padding: 2rem;
      box-sizing: border-box;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-out;
      font-weight: 300;
    }

    &:hover .posterOverlay {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media only screen and (max-width: 350px) {
    font-size: 0.8rem;
  }

  button {
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
