import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { downloadBtnSvg } from "../../config";
import UserCard from "../UserCard/UserCard";
import styled from "styled-components";
import theme from "../../Styles/StyleTheme";

const {
  colors: { grayColor },
} = theme;

const CardUser = (props) => {
  const [show, setShow] = useState(false);
  const showUserCard = () => {
    setShow(true);
  };
  const hideUserCard = () => {
    setShow(false);
  };

  return (
    <CardUserFrame>
      <div
        className="mouseOver"
        onMouseEnter={showUserCard}
        onMouseLeave={hideUserCard}
      >
        {show && (
          <UserCard
            cardUserId={props.data.cardUserId}
            cardUserImg={props.data.cardUserImg}
          />
        )}
        <div className="userTag">
          <img className="userImg" alt="" src={props.data.cardUserImg} />
          <p>{props.data.cardUserId}</p>
        </div>
      </div>
      <Buttons>{downloadBtnSvg}</Buttons>
    </CardUserFrame>
  );
};
export default withRouter(CardUser);

const CardUserFrame = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  padding: 20px;

  .mouseOver {
    z-index: 50;

    .userTag {
      display: flex;
      margin-top: 20px;
      align-items: center;
      cursor: pointer;

      .userImg {
        width: 32px;
        margin-right: 8px;
        border-radius: 100%;
      }

      p {
        font-family: sans-serif;
        color: white;
      }
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
