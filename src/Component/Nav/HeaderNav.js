import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeSvg, SearchSvg, DotSvg, AlarmSvg } from "../../Svg/svg";

const HeaderNav = ({ setSubmitModalState }) => {
  const [inputBg, setInputBg] = useState(false);

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
              <Link to="/">Topics</Link>
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
            <button onClick={() => setSubmitModalState(true)}>
              Submit
              <span> a photo</span>
            </button>
          </SubmitPhoto>
          <Alarm>
            <span>
              <button>{AlarmSvg}</button>
            </span>
          </Alarm>
          <NavUserIcon>
            <button />
          </NavUserIcon>
        </BtnContainer>
      </NavContainer>
    </header>
  );
};

export default HeaderNav;

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

const Alarm = styled.div`
  height: 48px;
  margin-left: 9px;

  button {
    ${(props) => props.theme.btnCustom};
    padding: 14px;
    fill: #767676;
  }
`;

const NavUserIcon = styled.div`
  margin-left: 6px;

  button {
    ${(props) => props.theme.btnCustom};
    width: 32px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
    background: url("https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff%201x,%20https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff%202x")
      no-repeat;
  }
`;
