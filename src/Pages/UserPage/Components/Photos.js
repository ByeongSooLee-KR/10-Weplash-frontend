import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterIcon from "./FooterIcon";

const Photos = () => {
  return (
    <PhotoWrap>
      {/* <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg" /> */}
      <FooterIcon />
    </PhotoWrap>
  );
};

export default Photos;

const PhotoWrap = styled.div`
  padding: 0 100px;
`;
