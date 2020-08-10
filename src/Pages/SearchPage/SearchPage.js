import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderNav from "../../Component/Nav/HeaderNav";
import FilterNav from "../../Component/Search/FilterNav";

const SearchPage = () => {
  return (
    <SearchPageWrap>
      <HeaderNav />
      <FilterNav />
    </SearchPageWrap>
  );
};

export default SearchPage;

const SearchPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
