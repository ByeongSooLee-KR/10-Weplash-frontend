import React, { useState } from "react";
import styled from "styled-components";
import { collectBtnSvg } from "../../../icons";

const AddIcon = () => {
  const [addState, setAddState] = useState(false);

  return (
    <Container AddState={addState}>
      <button>{collectBtnSvg}</button>
    </Container>
  );
};

export default AddIcon;

// Styled Components

const Container = styled.div`
  padding: 4px;

  button {
    ${(props) => props.theme.btnCustom};
    width: 39px;
    height: 32px;
    fill: ${(props) => (props.AddState ? "#fff" : "#767676")};
    background-color: ${(props) => (props.AddState ? "#3cb46e" : "#fff")};
    border: 1px solid ${(props) => (props.AddState ? "transparent" : "#d1d1d1")};
    border-radius: 4px;
    &:hover {
      border: 1px solid ${(props) => (props.AddState ? "none" : "#111")};
      fill: ${(props) => (props.AddState ? "#fff" : "#111")};
      background-color: ${(props) => (props.AddState ? "#2eab62" : "#fff")};
    }
  }

  svg {
    position: relative;
    width: 15px;
  }
`;
