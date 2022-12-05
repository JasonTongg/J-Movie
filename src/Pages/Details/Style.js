import styled from 'styled-components';

export const Container = styled.div`
  color: white;

  h3 {
    font-size: 1.4rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    cursor: grab;
  }

  h4 {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    svg {
      font-size: 1.4rem;
    }
  }

  .swiper-container:first-child {
    padding: 2rem 8rem;
  }
`;
