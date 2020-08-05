import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { followBtnSvg } from "../../config";
import styled from "styled-components";

const UserCard = (props) => {
  const [user, setUserCard] = useState([]);
  useEffect(() => {
    fetch("/Data/user.json")
      .then((res) => res.json())
      .then((res) => {
        setUserCard(res.data.user1);
      });
  }, []);

  const uploadedImg = user.uploadedImg;
  return (
    <UserCardFrame>
      <UserAccount>
        <img className="userProfile" alt="" src={props.cardUserImg} />
        <div>
          <p className="userName">{props.cardUserId}</p>
          <p className="userId">@{user.userId}</p>
        </div>
      </UserAccount>
      <UserUploadImg>
        {uploadedImg &&
          uploadedImg.map((item, i) => {
            return <FeatureImg key={i} img={`url("${item}")`} />;
          })}
      </UserUploadImg>
      <FollowButton>
        {followBtnSvg}
        <p>Follow</p>
      </FollowButton>
      <UserCardArrow />
    </UserCardFrame>
  );
};

export default withRouter(UserCard);

const UserCardFrame = styled.div`
  z-index: 50;
  width: 90%;
  height: 251px;
  padding: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: white;
  animation-name: anim;
  animation-duration: 0.8s;

  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const UserAccount = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  cursor: pointer;

  .userProfile {
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }

  div {
    margin-left: 16px;
  }

  .userName {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .userId {
    color: #767676;
    font-size: 15px;
  }
`;

const UserUploadImg = styled.div`
  margin-bottom: 16px;
  display: flex;
`;

const FeatureImg = styled.div`
  background-image: ${(props) => props.img};
  background-size: cover;
  width: 33%;
  height: 85px;
  margin: 0 1px;
  vertical-align: middle;
  cursor: pointer;
`;

const FollowButton = styled.button`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding: 11px;
  color: white;
  border-radius: 4px;
  border-style: none;
  background-color: #007fff;
  cursor: pointer;

  svg {
    width: 15px;
    fill: white;
    margin-right: 8px;
  }
`;

const UserCardArrow = styled.div`
  width: 12px;
  height: 12px;
  background-color: white;
  transform: rotate(45deg);
  margin-top: 10px;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
`;
