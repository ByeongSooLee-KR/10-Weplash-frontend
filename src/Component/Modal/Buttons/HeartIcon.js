import React, { useState } from "react";
import styled from "styled-components";
import { likeBtnSvg } from "../../../icons";

const HeartIcon = () => {
  const [likeState, setLikeState] = useState(false);

  return (
    <Container likeState={likeState}>
      <button onClick={() => setLikeState(!likeState)}>{likeBtnSvg}</button>
    </Container>
  );
};

export default HeartIcon;

// Styled Components

const Container = styled.div`
  padding: 4px;

  button {
    ${(props) => props.theme.btnCustom};
    width: 39px;
    height: 32px;
    fill: ${(props) => (props.likeState ? "#fff" : "#767676")};
    background-color: ${(props) => (props.likeState ? "#f15151" : "#fff")};
    border: 1px solid
      ${(props) => (props.likeState ? "transparent" : "#d1d1d1")};
    border-radius: 4px;
    &:hover {
      border: 1px solid ${(props) => (props.likeState ? "none" : "#111")};
      fill: ${(props) => (props.likeState ? "#fff" : "#111")};
      background-color: ${(props) => (props.likeState ? "#d61313" : "#fff")};
    }
  }

  svg {
    position: relative;
    width: 15px;
  }
`;
