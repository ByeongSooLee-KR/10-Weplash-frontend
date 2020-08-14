import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserCard from "../UserCard/UserCard";
import { downloadBtnSvg } from "../../icons";
import theme from "../../Styles/StyleTheme";

const CardUser = ({ data, userCardState }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const clickUser = () => {
    history.push(`/account/@${data.user_name}`);
  };

  return (
    <CardUserFrame>
      <div
        className="mouseOver"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && userCardState && (
          <UserCard
            data={data}
            cardUserId={data.user_name}
            cardUserName={data.user_first_name + data.user_last_name}
            cardUserImg={data.user_profile_image}
            show={show}
            userCardState={userCardState}
          />
        )}
        <div className="userTag" onClick={clickUser}>
          <img
            className="userImg"
            alt="userProfileImg"
            src={data.user_profile_image}
          />
          <p>{data.user_name}</p>
        </div>
      </div>
      <Buttons>{downloadBtnSvg}</Buttons>
    </CardUserFrame>
  );
};
export default withRouter(CardUser);

const {
  colors: { grayColor },
} = theme;

const CardUserFrame = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 20px;
  z-index: 10;

  .mouseOver {
    width: 90%;
    z-index: 50;

    .userTag {
      display: flex;
      align-items: center;
      margin-top: 20px;
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
