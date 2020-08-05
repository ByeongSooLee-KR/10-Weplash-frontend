import React from "react";
import styled from "styled-components";
import theme from "../Styles/StyleTheme";

const Loading = () => {
  return (
    <LoadingFrame colors={theme.colors}>
      <div class="loadBar">
        <div></div>
      </div>
    </LoadingFrame>
  );
};
export default Loading;

const LoadingFrame = styled.div`
  position: fixed;
  margin: 0 auto;
  z-index: 10;
  top: 46%;
  left: 46%;

  @keyframes loadBar {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loadBar div {
    position: absolute;
    animation: loadBar 1s linear infinite;
    width: 80px;
    height: 80px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    box-shadow: 0 4.8px 0 0 #fff;
    transform-origin: 40px 42.4px;
  }

  .Loading {
    width: 84px;
    height: 84px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }

  .loadBar {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.84);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
`;
