import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { followBtnSvg } from "../../icons";

const UserCard = ({ show, cardUserImg, cardUserName, cardUserId }) => {
  const [user, setUserCard] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.1.191:8000/photo/user-card/${cardUserId}`)
      .then((res) => res.json())
      .then((res) => {
        setUserCard(res.data);
      });
  }, []);

  const photos = user.photos;
  return (
    <UserCardFrame show={show}>
      <UserAccount>
        <img className="userProfile" alt="userProfileImg" src={cardUserImg} />
        <div>
          <p className="userName">{cardUserName}</p>
          <p className="userId">@{cardUserId}</p>
        </div>
      </UserAccount>
      <UserUploadImg>
        {photos &&
          photos.map((item, i) => {
            return <FeatureImg key={i} img={`url("${item}")`} />;
          })}
      </UserUploadImg>
      {user.follow === "self" && (
        <ViewProfileButton>
          <p>ViewProfile</p>
        </ViewProfileButton>
      )}
      {user.follow ? (
        <FollowingButton>
          <p>Following</p>
        </FollowingButton>
      ) : (
        <FollowButton>
          {followBtnSvg}
          <p>Follow</p>
        </FollowButton>
      )}
      <UserCardArrow />
    </UserCardFrame>
  );
};

export default UserCard;

const UserCardFrame = styled.div`
  width: 100%;
  height: 251px;
  padding: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: white;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 1s;
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

const ViewProfileButton = styled.button`
  width: 100%;
  padding: 11px;
  color: white;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  background-color: white;
  cursor: pointer;
`;

const FollowingButton = styled.button`
  width: 100%;
  padding: 11px;
  color: white;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  background-color: white;
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
