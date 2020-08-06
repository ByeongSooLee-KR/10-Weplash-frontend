import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterIcon from "./FooterIcon";

const Collections = () => {
  return (
    <CollectionWrap>
      {/* <img src="https://images.unsplash.com/photo-1596564163975-40a015abf4e8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" /> */}
      <FooterIcon />
    </CollectionWrap>
  );
};

export default Collections;

const CollectionWrap = styled.div`
  padding: 0 100px;
`;
