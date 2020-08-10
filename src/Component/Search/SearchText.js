import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchText = () => {
  return (
    <SearchTextWrap>
      <SearchTitle>Title</SearchTitle>
      <SearchHashs>Wildlife</SearchHashs>
    </SearchTextWrap>
  );
};

export default SearchText;

const SearchTextWrap = styled.div`
  padding: 60px 12px 72px;
`;

const SearchTitle = styled.h1`
  font-size: 46px;
  margin-bottom: 16px;
`;

const SearchHashs = styled.button`
  width: 139px;
  height: 40px;
  font-size: 14px;
  color: #767676;
  background-color: white;
  padding: 13px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #d1d1d1;
  border-radius: 4px;

  &:hover {
    border: 1px solid black;
  }
  &:foucs {
    outline: none;
  }
`;
