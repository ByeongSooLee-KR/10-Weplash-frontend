import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import { downloadBtnSvg } from "../../icons";
import UserCard from "../UserCard/UserCard";
import theme from "../../Styles/StyleTheme";

const CardUser = ({ data, userCardState }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const clickUser = () => {
    console.log();
    history.push(`/account/@${data.user_name}`);
  };
  //10.58.1.242:8000/photo?user=photos

  http: return (
    <CardUserFrame>
      <div
        className="mouseOver"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && userCardState && (
          <UserCard
            cardUserId={data.user_name}
            cardUserName={data.user_first_name + data.user_last_name}
            cardUserImg={data.user_profile_image}
            show={show}
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
  z-index: 10;
  display: flex;
  width: 100%;
  align-items: flex-end;
  padding: 20px;

  .mouseOver {
    z-index: 50;
    width: 90%;

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
