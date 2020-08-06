import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterIcon from "./FooterIcon";

const Likes = () => {
  return (
    <LikeWrap>
      {/* <img src="https://images.unsplash.com/photo-1596564163975-40a015abf4e8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" /> */}
      <FooterIcon />
    </LikeWrap>
  );
};

export default Likes;

const LikeWrap = styled.div`
  padding: 0 100px;
`;
