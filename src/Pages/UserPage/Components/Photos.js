import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterIcon from "./FooterIcon";
import { userPageAPI, userPagePhotoAPI } from "../../../config";
import Card from "../../../Component/Card/Card";

const Photos = (props) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    fetch(`${userPagePhotoAPI}${props.userId}&user_category=photos`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
      });
  }, []);

  return (
    <PhotoWrap>
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
    </PhotoWrap>
  );
};

export default Photos;

const PhotoWrap = styled.div`
  padding: 0 100px;
  margin-top: 40px;
`;

const UserPhotoList = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;
