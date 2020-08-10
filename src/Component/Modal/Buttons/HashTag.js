import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HashTag = (props) => {
  return (
    <Container>
      <Link>{props.tag}</Link>
    </Container>
  );
};

export default HashTag;

// Styled Components

const Container = styled.div`
  height: 34px;
  padding-bottom: 8px;
  padding-right: 8px;

  a {
    color: #767676;
    background-color: #eee;
    padding: 0 8px;
    border-radius: 2px;
    text-decoration: none;
    font-size: 14px;
    line-height: 26px;
  }
`;
