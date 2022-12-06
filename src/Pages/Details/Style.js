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

    h3 {
      @media only screen and (max-width: 400px) {
        font-size: 1.1rem;
      }
    }
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

  iframe {
    resize: bold;
  }

  .sc-gswNZR {
    padding-inline: 0;
  }
`;
