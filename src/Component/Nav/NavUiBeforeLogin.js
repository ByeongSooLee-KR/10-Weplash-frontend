import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUiBeforeLogin = () => {
  return (
    <>
      <LoginBox>
        <div className="border" />
        <Link to="/Login">
          <button className="login">Login</button>
        </Link>
        <Link to="/Join">
          <button className="join">Join free</button>
        </Link>
      </LoginBox>
    </>
  );
};

export default NavUiBeforeLogin;

const LoginBox = styled.div`
  width: 180px;
  display: flex;

  .border {
    background-color: #d1d1d1;
    width: 1px;
    height: 32px;
    margin: 0 12px;
    flex-shrink: 0;
  }

  button {
    ${(props) => props.theme.btnCustom};
  }

  .login {
    width: 60px;
    height: 32px;
    margin-right: 14px;
    padding: 0 11px;
    font-size: 14px;
    line-height: 30px;
    color: #767676;
  }

  .join {
    width: 80px;
    height: 32px;
    border-radius: 4px;
    background-color: #3cb46e;
    color: #fff;
  }
`;
