import React from "react";
import styled from "styled-components";
import ModalContent from "./ModalContent/ModalContents";

const ModalPage = ({ cardData, cardIndex }) => {
  return (
    <Container>
      <ModalContent cardData={cardData} cardIndex={cardIndex} />
    </Container>
  );
};

export default ModalPage;

// Styled Components

const Container = styled.div`
  ${(props) => props.theme.flexCenter};
  border-radius: 4px;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
`;
