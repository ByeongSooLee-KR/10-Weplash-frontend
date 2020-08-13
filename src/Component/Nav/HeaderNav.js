import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import NavUiBeforeLogin from "./NavUiBeforeLogin";
import NavUiLogin from "./NavUiLogin";
import { loginAction } from "../../redux/actions";
import { HomeSvg, SearchSvg, DotSvg } from "../../Svg/svg";

const HeaderNav = ({ setSubmitModalState, authState, loginAction }) => {
  const [inputBg, setInputBg] = useState(false);
  const history = useHistory();

  return (
    <header>
      <NavContainer>
        <SearchContainer>
          <Link to="/">{HomeSvg}</Link>
          <SearchBar inputBg={inputBg}>
            <form>
              <button>{SearchSvg}</button>
              <InputBox
                onFocus={() => setInputBg(!inputBg)}
                onBlur={() => setInputBg(!inputBg)}
                placeholder="Search free high-resolution photos"
              />
            </form>
          </SearchBar>
        </SearchContainer>
        <HomeContainer className="2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CardList">Topics</Link>
            </li>
            <li className="dots">
              <div>
                <button>{DotSvg}</button>
              </div>
            </li>
          </ul>
        </HomeContainer>
        <BtnContainer>
          <SubmitPhoto>
            <button
              onClick={
                authState
                  ? () => setSubmitModalState(true)
                  : () => history.push("/Login")
              }
            >
              Submit
              <span> a photo</span>
            </button>
          </SubmitPhoto>
          {authState ? <NavUiLogin /> : <NavUiBeforeLogin />}
        </BtnContainer>
      </NavContainer>
    </header>
  );
};

//redux

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { loginAction })(HeaderNav);

const NavContainer = styled.nav`
  width: 100%;
  height: 62px;
  display: flex;
  padding: 0 20px;
  margin: 0 auto;
  background-color: #fff;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 100%;
  margin-left: 18px;

  form {
    display: flex;
    height: 40px;
    border-radius: 24px;
    background-color: ${(props) => (props.inputBg ? "#fff" : "#eee")};
    font-size: 14px;
    overflow: hidden;
    border: 1px solid ${(props) => (props.inputBg ? "#eee" : "#fff")};
    &:hover {
      border: 1px solid lightgrey;
    }

    button {
      ${(props) => props.theme.btnCustom};
      display: flex;
      align-items: center;
      background-color: initial;

      svg {
        width: 16px;
        height: 16px;
        padding-left: 14px;
        box-sizing: initial;
        fill: #767676;
      }
    }
  }
`;

const InputBox = styled.input`
  width: 100%;
  padding-left: 12px;
  padding-bottom: 2px;
  border: none;
  background-color: inherit;
  outline: none;
  cursor: text;
`;

const HomeContainer = styled.div`
  display: flex;
  padding: 0 36px;

  ul {
    display: flex;

    li {
      ${(props) => props.theme.flexCenter};

      a {
        ${(props) => props.theme.flexCenter};
        height: 100%;
        padding: 20px 12px;
        font-size: 14px;
        font-weight: 500;
        line-height: 30px;
        color: #767676;
      }
    }

    button {
      ${(props) => props.theme.btnCustom};
      padding-right: 12px;
      padding-left: 12px;
    }

    .dots {
      fill: #767676;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;

  .border {
    background-color: #d1d1d1;
    width: 1px;
    height: 32px;
    margin: 0 12px;
    flex-shrink: 0;
  }
`;

const SubmitPhoto = styled.div`
  width: 124.8px;
  display: flex;
  align-items: center;

  button {
    ${(props) => props.theme.btnCustom};
    height: 32px;
    padding: 0 11px;
    font-size: 14px;
    line-height: 30px;
    color: #767676;
    border: 1px solid lightgrey;
    border-radius: 4px;
  }
`;
