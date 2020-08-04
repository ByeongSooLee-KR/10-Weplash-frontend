import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { signupAPI } from "../../config";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });

  const [firstNameValid, setFirstNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [userNameValid, setUserNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const { firstName, lastName, email, userName, password } = userInfo;
  const history = useHistory();

  const handleInput = (name, e) => {
    setUserInfo({ ...userInfo, [name]: e.target.value });
  };

  const isNameValid = (e) => {
    const isValid = e.target.value.length;
    e.target.name === "firstName"
      ? setFirstNameValid(isValid)
      : setUserNameValid(isValid);
  };

  const isEmailValid = (e) => {
    const isValid = e.target.value.includes("@");
    setEmailValid(isValid);
  };

  const isPasswordValid = (e) => {
    const isValid = e.target.value.length < 6;
    setPasswordValid(!isValid);
  };

  const handleSignUp = () => {
    if (firstNameValid && emailValid && userNameValid && passwordValid) {
      fetch(signupAPI, {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          user_name: userName,
          password: password,
        }),
      })
        .then((res) => {
          console.log(res);
          if (!res.ok) throw new Error();
          return res.json();
        })

        .then((res) => {
          if (res.access_token) {
            localStorage.setItem("user-token", res.access_token);
            alert("가입이 완료되었습니다.");
            history.push("/");
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <SignUpWrap>
      <LeftPicSide>
        <LeftContainer>
          <UpperContent>
            <img
              className="registrations__logo"
              alt="logo"
              src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg"
            />
          </UpperContent>
          <CenterContent>
            <Title>Creation starts here</Title>;
            <SubTitle>
              Access 2,023,630 free, high-resolution photos you can’t find
              anywhere else
            </SubTitle>
            ;
          </CenterContent>
          <BottomContent>
            <p>Uploaded almost 7 years ago by Paul Evans</p>
          </BottomContent>
          ;
        </LeftContainer>
      </LeftPicSide>
      <RightInputSide>
        <RightContainer>
          <RightTitle>
            <p className="signUpTitle">Join Unsplash</p>
            <div className="flex">
              <p className="subTitle">Already have an account</p>
              <StyledLink to="/Login">Login</StyledLink>
            </div>
          </RightTitle>
          <Button>
            <img alt="구글 아이콘" src="Images/googleLogo.jpg" />
            <ButtonText>Login with Google</ButtonText>
          </Button>
          <OrText>OR</OrText>
          <FlexBetween>
            <div className="halfInput" id="marginRight">
              <InputUpperText>
                <Text className={firstNameValid ? "" : "invalid"}>
                  First name
                </Text>
              </InputUpperText>
              <HalfSizeInput
                type="text"
                onChange={(e) => handleInput("firstName", e)}
                name="firstName"
                onBlur={isNameValid}
                onKeyUp={isNameValid}
              />
            </div>
            <div className="halfInput">
              <InputUpperText>
                <Text>Last name</Text>
              </InputUpperText>
              <HalfSizeInput
                type="text"
                onChange={(e) => handleInput("lastName", e)}
                name="lastName"
              />
            </div>
          </FlexBetween>
          <InputUpperText>
            <Text className={emailValid ? "" : "invalid"}>Email address</Text>
          </InputUpperText>
          <Input
            type="email"
            onChange={(e) => handleInput("email", e)}
            name="email"
            onBlur={isEmailValid}
            onKeyUp={isEmailValid}
          />
          <InputUpperText>
            <Flex>
              <Text className={userNameValid ? "" : "invalid"}>Username</Text>
              <GreyText>(Only letters, numbers, and underscores)</GreyText>
            </Flex>
          </InputUpperText>
          <Input
            type="text"
            onChange={(e) => handleInput("userName", e)}
            name="userName"
            onBlur={isNameValid}
            onKeyUp={isNameValid}
          />
          <InputUpperText>
            <Flex>
              <Text className={passwordValid ? "" : "invalid"}>Password</Text>
              <GreyText>(min, 6char)</GreyText>
            </Flex>
          </InputUpperText>
          <Input
            type="password"
            onChange={(e) => handleInput("password", e)}
            name="password"
            onBlur={isPasswordValid}
            onKeyUp={isPasswordValid}
          />
          <SignUpButton onClick={handleSignUp}>
            <p>Join</p>
          </SignUpButton>
          <LastText>
            By joining, you agreee to the Terms and Privacy Policy
          </LastText>
        </RightContainer>
      </RightInputSide>
    </SignUpWrap>
  );
};
export default SignUp;

const SignUpWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 3.8fr 6.2fr;
  grid-template-rows: 1fr;
`;

const LeftPicSide = styled.div`
  background-image: url("https://images.unsplash.com/8/les-portes.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max");
  background-size: cover;
`;

const LeftContainer = styled.div`
  height: 100%;
  padding: 41px 51px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const UpperContent = styled.div`
  position: absolute;
  top: 8%;
`;

const Title = styled.div`
  font-size: 48px;
  color: white;
`;

const SubTitle = styled(Title)`
  font-size: 24px;
`;

const Text = styled.div`
  font-size: 15px;
  color: black;
  margin-bottom: 10px;

  .invalid {
    color: red;
  }
`;

const CenterContent = styled.div`
  position: absolute;
  top: 42%;
`;

const BottomContent = styled.div`
  position: absolute;
  bottom: 8%;
  p {
    font-size: 15px;
    color: white;
  }
`;

const RightInputSide = styled.div`
  height: 100%;
  padding: 120px 115px 20px;
`;

const RightContainer = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .signUpTitle {
    font-size: 46px;
  }
  .flex {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    .subTitle {
      font-size: 15px;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  color: ${(props) => props.theme.colors.grayColor};
  margin-left: 5px;
  text-decoration: underline;
  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: rgb(248, 248, 249);
  padding: 9px 58px 9px 18px;
  margin: 60px 0 20px;
  border: 1px solid rgb(221, 224, 226);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  img {
    width: 80px;
    margin-right: -20px;
  }
`;

const ButtonText = styled.p`
  font-size: 15px;
  color: black;
  text-align: center;
`;

const InputUpperText = styled.div`
  display: flex;

  .invalid {
    color: red;
  }
`;

const OrText = styled(Text)`
  font-size: 12px;
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  margin-bottom: 30px;
`;

const SignUpButton = styled(Button)`
  margin-top: 10px;
  background-color: black;
  padding: 9px 18px;

  p {
    font-size: 15px;
    color: white;
  }
`;

const GreyText = styled(Text)`
  color: ${(props) => props.theme.colors.grayColor};
  margin-left: 10px;
`;

const Flex = styled.div`
  display: flex;
  .halfInput {
    width: 100%;
  }
  #marginRight {
    margin-right: 20px;
  }
`;

const LastText = styled(GreyText)`
  font-size: 13px;
  text-align: center;
`;

const HalfSizeInput = styled(Input)``;

const FlexBetween = styled(Flex)`
  display: flex;
  justify-content: space-around;
`;
