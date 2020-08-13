import React, { useState } from "react";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import CategoriesNav from "./CategoriesNav";
import Upload from "../../Component/Upload/Upload";

const Nav = () => {
  const [submitModalState, setSubmitModalState] = useState(false);

  return (
    <NavContainer>
      <HeaderNav setSubmitModalState={setSubmitModalState} />
      <CategoriesNav />
      {submitModalState && <Upload setSubmitModalState={setSubmitModalState} />}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;
