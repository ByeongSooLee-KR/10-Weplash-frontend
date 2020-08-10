import React from "react";
import styled from "styled-components";

const BtnDirection = ({ cardIndex, cardLength, handleIndex }) => {
  const handlePrevious = () => {
    cardIndex > 0 && handleIndex(cardIndex - 1);
  };

  const handleNext = () => {
    cardIndex < cardLength - 1 && handleIndex(cardIndex + 1);
  };

  return (
    <Container>
      <div onClick={handlePrevious}>
        <svg
          width="32"
          height="32"
          className="_2tKOW"
          version="1.1"
          viewBox="0 0 32 32"
          aria-hidden="false"
        >
          <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"></path>
        </svg>
      </div>
      <div onClick={handleNext}>
        <svg
          width="32"
          height="32"
          className="_2tKOW"
          version="1.1"
          viewBox="0 0 32 32"
          aria-hidden="false"
        >
          <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path>
        </svg>
      </div>
    </Container>
  );
};

export default BtnDirection;

// Styled Components

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 45%;
  width: 100%;
  left: 0;

  div {
    opacity: 0.8;
    /* padding: 80px 44px; */
    padding: 6vh 2.2vw;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
      fill: #d1d1d1;
      &:hover {
        fill: #fff;
      }
    }
  }
`;
