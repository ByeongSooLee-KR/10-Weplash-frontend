import React from "react";
import styled from "styled-components";
import Heart from "./HeartIcon";
import Add from "./AddIcon";
import DownloadIcon from "./DownloadIcon";

const Buttons = () => {
  return (
    <Container>
      <Heart />
      <Add />
      <DownloadIcon />
    </Container>
  );
};

export default Buttons;

// Styled Components

const Container = styled.div`
  display: flex;
  width: 226.67px;
  height: 40px;
  background-color: #fff;
`;
