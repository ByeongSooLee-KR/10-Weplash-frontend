import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { loginAction } from "../../redux/actions";
import { AlarmSvg } from "../../Svg/svg";

const NavUiLogin = ({ loginAction }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <Alarm>
        <span>
          <button>{AlarmSvg}</button>
        </span>
      </Alarm>
      <NavUserIcon onClick={() => setDropDownOpen(!dropDownOpen)}>
        <button />
        {dropDownOpen && (
          <UserDropDown>
            <UserCardArrow />
            <ul>
              <Link to="/UserPage">
                {/* <Link to =`/account/@${data.user_name}`> */}
                <li>View profile</li>
              </Link>
              <Link to="/">
                <li
                  onBlur={() => setDropDownOpen(!dropDownOpen)}
                  onClick={() => {
                    console.log("click");
                    localStorage.removeItem("access_token");
                    loginAction("");
                    history.push("/Login");
                  }}
                >
                  Logout
                </li>
              </Link>
            </ul>
          </UserDropDown>
        )}
      </NavUserIcon>
    </>
  );
};

export default connect(null, { loginAction })(NavUiLogin);

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
  display: flex;
  flex-direction: column;
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

const UserDropDown = styled.div`
  position: absolute;
  width: 178px;
  height: 92px;
  top: 62px;
  right: 15px;
  border-radius: 4px;
  z-index: 3;
  background-color: #111;

  ul {
    padding: 8px 0;

    li {
      height: 38px;
      padding: 8px 16px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: rgb(209, 209, 209);
      }
    }
  }
`;

const UserCardArrow = styled.div`
  position: absolute;
  top: -4px;
  right: 15px;
  width: 12px;
  height: 12px;
  background-color: #111;
  transform: rotate(45deg);
`;
