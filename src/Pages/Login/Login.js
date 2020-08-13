import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { signinAPI, signinkakaoAPI, iconKaKao } from "../../config";
const { Kakao } = window;

const Login = ({ loginAction }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    if (userEmail.includes("@")) {
      fetch(signinAPI, {
        method: "POST",
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          }
          return res.json();
        })
        .then((res) => {
          if (res.access_token) {
            loginAction(true);
            sessionStorage.setItem("access_token", res.access_token);
            history.push("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setHasError(true);
        });
    }
  };

  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${signinkakaoAPI}`, {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.access_token) {
              loginAction(true);
              localStorage.setItem("Kakao_token", res.access_token);
              alert("Weplash 에 오신걸 환영합니다!");
              history.push("/");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <EntireWrap>
      <LoginWrap>
        <LogoWrap>
          <img
            alt="로그인 로고"
            src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
          />
          <p className="loginTitle">Login</p>
          <p className="loginWelcome">Welcome Back</p>
        </LogoWrap>
        <KaKaoBtn
          buttonText="카카오 계정으로 로그인"
          onClick={handleKakaoLogin}
        >
          <Flex>
            <svg viewBox="0 0 24 24">
              <path d={iconKaKao}></path>
            </svg>
            <p>카카오 계정으로 5초만에 로그인</p>
          </Flex>
        </KaKaoBtn>

        <OrText>OR</OrText>
        <InputUpperText>
          <Text>Email</Text>
        </InputUpperText>
        <Input type="text" onChange={(e) => setUserEmail(e.target.value)} />
        <InputUpperText>
          <Text>Password</Text>
          <StyledLink>Forgot your password</StyledLink>
        </InputUpperText>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <LoginButton onClick={handleLogin}>
          <p>Login</p>
        </LoginButton>
        <DownText>
          <Text>Don't have an account?</Text>
          <StyledLink to="/SignUp">Join</StyledLink>
        </DownText>
      </LoginWrap>
    </EntireWrap>
  );
};
export default connect(null, { loginAction })(Login);

const EntireWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  width: 526px;
  height: 590px;
  text-align: center;
  padding: 0 12px;
  margin: 0 auto;
`;

const LogoWrap = styled.div`
  img {
    width: 64px;
    margin-bottom: 24px;
  }
  .loginTitle {
    font-size: 28px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 20px;
  }
  .loginWelcome {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 32px;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: black;
  padding: 9px 18px;
  margin-bottom: 20px;
  border: 1px solid rgb(221, 224, 226);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  p {
    font-size: 15px;
    color: white;
  }
`;

const KaKaoBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-bottom: 20px;
  padding: 0;
  line-height: 44px;
  color: #783c00;
  background-color: rgb(248, 248, 249);
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
  svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    fill: #783c00;
  }
`;

const ButtonText = styled.p`
  font-size: 15px;
  color: black;
  text-align: center;
`;

const Text = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.blackColor};
  font-weight: 300;
  margin-bottom: 10px;
`;

const OrText = styled(Text)`
  font-size: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  margin-bottom: 30px;
`;

const InputUpperText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DownText = styled(InputUpperText)`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  color: ${(props) => props.theme.colors.grayColor};
  text-decoration: underline;
  &:hover {
    color: black;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
