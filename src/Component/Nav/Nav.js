import React from "react";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import CategoriesNav from "./CategoriesNav";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Nav = () => {
  return (
    <NavContainer>
      <HeaderNav />
      <CategoriesNav />
    </NavContainer>
  );
};

export default Nav;
