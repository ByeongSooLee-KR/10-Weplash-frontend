import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { iconFollow, userPageAPI } from "../../../config";

const UserProfile = (props) => {
  const [userData, setUserData] = useState([]);
  const [followState, setFollowState] = useState(true);

  useEffect(() => {
    fetch(`${userPageAPI}${props.userId}`)
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
      });
  }, []);

  const clickFollow = () => {
    setFollowState(!followState);
  };

  const clickTag = (e) => {
    props.history.push(`/photo/${e}`);
  };

  return (
    <ProfileContainer>
      <div className="flex">
        <ProfilePic>
          <img alt="userProfile" src={userData.profile_image} />
        </ProfilePic>
        <ProfileInfo>
          <Upper>
            <p className="userName">
              {userData.first_name} {userData.last_name}{" "}
            </p>
            <Flex>
              <button className="follow btn" onClick={clickFollow}>
                <WantFollow followState={followState}>
                  <svg viewBox="0 0 32 32">
                    <path d={iconFollow}></path>
                  </svg>
                  <p>Follow</p>
                </WantFollow>
                <Following followState={followState}>
                  <p>Following</p>
                </Following>
              </button>
              <button className="message btn">Message</button>
            </Flex>
          </Upper>
          <p className="subInfo">
            Download free, beautiful high-quality photos curated by{" "}
            {userData.first_name}.
          </p>
          <TagBox>
            <p className="title">Interests</p>
            <TagContents>
              {userData.interests &&
                userData.interests.map((el) => {
                  return (
                    <div className="tag" onClick={() => clickTag(el)}>
                      {el}
                    </div>
                  );
                })}
            </TagContents>
          </TagBox>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  );
};

export default withRouter(UserProfile);

const ProfileContainer = styled.div`
  max-width: 750px;
  height: 282px;
  padding: 60px 12px 72px;
  margin: 0 auto;

  .flex {
    display: flex;
  }
`;

const ProfilePic = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const ProfileInfo = styled.div`
  width: 100vw;
  padding-top: 15px;
  margin-left: 55px;
  .subInfo {
    color: #767676;
    font-size: 17px;
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
`;

const Upper = styled.div`
  display: flex;
  margin-bottom: 20px;
  .userName {
    font-size: 40px;
  }
  .btn {
    width: 95.65px;
    height: 32px;
    padding: 4px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    margin-top: 3px;
    svg {
      width: 15px;
      height: 15px;
      margin-right: 8px;
      margin-left: 8px;
    }
  }
  .follow {
    background-color: #007fff;
    margin-left: 20px;
    fill: white;
    position: relative;
  }
  .message {
    background-color: black;
    margin-left: 10px;
    color: white;
  }
`;

const WantFollow = styled.div`
  display: flex;
  color: white;
  position: absolute;
  top: 20%;
  left: 10%;
  visibility: ${(props) => (props.followState ? "visible" : "hidden")};
`;

const Following = styled.div`
  width: 95.65px;
  height: 32px;
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #767676;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.followState ? "hidden" : "visibe")};
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .title {
    padding-bottom: 10px;
  }
`;

const TagContents = styled.div`
  display: flex;
  align-items: center;

  .tag {
    height: 26px;
    font-size: 14px;
    background-color: #f1f1f1;
    padding: 5px 5px 5px 7px;
    margin-right: 5px;

    &:focus,
    &:hover {
      border: 1px solid black;
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;

const Flex = styled.div`
  display: flex;
`;
