import React from "react";
import { withRouter } from "react-router-dom";
import { downloadBtnSvg } from "../../config";
import styled from "styled-components";
import theme from "../../Styles/StyleTheme";

const {
  colors: { grayColor },
} = theme;

const CardUser = (props) => {
  return (
    <CardUserFrame>
      <section>
        <img alt="" src={props.data.cardUserImg} />
        <p>{props.data.cardUserId}</p>
      </section>
      <Buttons>{downloadBtnSvg}</Buttons>
    </CardUserFrame>
  );
};
export default withRouter(CardUser);

const CardUserFrame = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  bottom: 20px;

  section {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: inherit;
    cursor: pointer;

    img {
      width: 32px;
      margin-right: 8px;
      border-radius: 100%;
    }

    p {
      font-family: sans-serif;
      color: white;
    }
  }
`;

const Buttons = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  opacity: 0.8;
  margin-left: auto;
  padding: 6px 12px;
  font-size: 15px;
  border-style: none;
  border-radius: 4px;
  background-color: "white";
  outline: none;
  cursor: pointer;
  svg {
    width: 16px;
    fill: ${({ active }) => (active ? "white" : grayColor)};
  }
  &:hover {
    opacity: 1;
  }
`;
