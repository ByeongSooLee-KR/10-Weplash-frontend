import React from "react";
import styled from "styled-components";
import { iconFooter } from "../../../config";

const FooterIcon = () => {
  return (
    <IconBox>
      <svg viewBox="0 0 32 32">
        <path d={iconFooter}></path>
      </svg>
      <p className="text">Make something awesome</p>
    </IconBox>
  );
};

export default FooterIcon;

const IconBox = styled.div`
  max-width: 250px;
  margin: 0 auto;
  padding: 80px 0;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    text-align: center;
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
  }

  .text {
    color: #767676;
    margin-top: 8px;
  }
`;
