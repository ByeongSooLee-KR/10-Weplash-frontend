import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Photos from "./Components/Photos";
import Likes from "./Components/Likes";
import Collections from "./Components/Collections";
import UserProfile from "./Components/UserProfile";
import MyProfile from "./Components/MyProfile";
import HeaderNav from "../../Component/Nav/HeaderNav";
import {
  iconPhoto,
  iconLike,
  iconCollection,
  iconStat,
  userPageAPI,
} from "../../config";

const obj = {
  0: <Photos />,
  1: <Likes />,
  2: <Collections />,
};

const UserPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState([]);
  const [userValidate, setUserValidate] = useState(false);
  const history = useHistory();
  const userId = history.location.pathname.slice(10);

  useEffect(() => {
    fetch(`${userPageAPI}`)
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
        res.user && setUserValidate(true);
      });
  }, []);

  const handleClick = (id) => {
    setActiveTab(id);
  };
  console.log(userId);
  return (
    <>
      <HeaderNav />
      <UserPageWrap>
        {userValidate ? <MyProfile /> : <UserProfile />}
        <Icons>
          <StyledLink className="photo" onClick={() => handleClick(0)}>
            <svg viewBox="0 0 32 32">
              <path d={iconPhoto}></path>
            </svg>
            Photos
          </StyledLink>
          <StyledLink className="like" onClick={() => handleClick(1)}>
            <svg viewBox="0 0 32 32">
              <path d={iconLike}></path>
            </svg>
            Likes
          </StyledLink>
          <StyledLink className="collection" onClick={() => handleClick(2)}>
            <svg viewBox="0 0 32 32">
              <path d={iconCollection}></path>
            </svg>
            Collections
          </StyledLink>
          <StyledLink className="stat">
            <svg viewBox="0 0 32 32">
              <path d={iconStat}></path>
            </svg>
            Stats
          </StyledLink>
        </Icons>
        <Contents>{obj[activeTab]}</Contents>
      </UserPageWrap>
    </>
  );
};

export default UserPage;

const UserPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  .visible {
    top: 0;
    visibility: visible;
  }
  .hidden {
    top: 0;
    visibility: hidden;
  }
`;

const Icons = styled.div`
   display: flex;
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.grayColor};
  margin-left: 32px;
  padding-bottom: 17px;
  display: flex;
  vertical-align: center;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    fill: #d1d1d1;
  }
  &:hover,
  &:focus {
    color: black;
    svg {
      fill: black;
    }
  }
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const Contents = styled.div`
  width: 100%;
  border-top: 1px solid #d1d1d1;
`;

const Flex = styled.div`
  display: flex;
`;
