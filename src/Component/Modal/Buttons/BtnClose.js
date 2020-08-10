import React from "react";
import styled from "styled-components";

const BtnClose = ({ handleModal }) => {
  return (
    <Container>
      <button onClick={handleModal}>
        <svg
          width="32"
          height="32"
          className="_3p8U1"
          version="1.1"
          viewBox="0 0 32 32"
          aria-hidden="false"
        >
          <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
        </svg>
      </button>
    </Container>
  );
};

export default BtnClose;

// Styled Components

const Container = styled.div`
  position: absolute;
  margin-top: -25px;
  margin-left: -5.5vw;

  button {
    ${(props) => props.theme.btnCustom}
    position: fixed;
    opacity: 0.8;

    svg {
      width: 24px;
      height: 24px;
      fill: #d1d1d1;
      &:hover {
        fill: #fff;
      }
    }
  }
`;
