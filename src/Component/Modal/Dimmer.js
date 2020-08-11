import React from "react";
import styled from "styled-components";
import BtnClose from "./Buttons/BtnClose";

const Dimmer = ({ setSubmitModalState }) => {
  const handleCloseModal = () => {
    setSubmitModalState(false);
  };

  return (
    <DimmerContainer onClick={handleCloseModal}>
      <BtnClose />
    </DimmerContainer>
  );
};

export default Dimmer;

const DimmerContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 35px 6vw 100px;
`;
