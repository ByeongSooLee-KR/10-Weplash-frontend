import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterIcon from "./FooterIcon";
import { userPagePhotoAPI } from "../../../config";
import Card from "../../../Component/Card/Card";

const Likes = (props, activeTab) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`${userPagePhotoAPI}${props.userId}&user_category=likes`)
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
      });
  }, [props.activeTab]);

  return (
    <LikeWrap>
      <UserPhotoList>
        {userData.map((card, i) => {
          return (
            <div className="card" key={i}>
              <Card
                card={card}
                id={i}
                isModalActive={false}
                userCardState={true}
              />
            </div>
          );
        })}
      </UserPhotoList>
      <FooterIcon />
    </LikeWrap>
  );
};

export default Likes;

const LikeWrap = styled.div`
  padding: 0 100px;
  margin-top: 40px;
`;

const UserPhotoList = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;
