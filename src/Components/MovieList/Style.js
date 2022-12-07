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

  .gBsoiU .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px !important;

    // @media only screen and (max-width: 400px) {
    //   justify-content: flex-start !important;
    // }
  }

  .content {
    position: relative;
    cursor: pointer;

    @media only screen and (max-width: 400px) {
      width: 280px;
    }

    @media only screen and (max-width: 350px) {
      width: 230px;
    }

    @media only screen and (max-width: 300px) {
      width: 220px;
    }

    @media only screen and (max-width: 250px) {
      width: 170px;
    }

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
`;
