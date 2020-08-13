import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { searchBtnSvg, mainsearchAPI } from "../../config";

const MainSearch = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchDatas, setSearchDatas] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [stateSearchModal, setStateSearchModal] = useState(false);

  const handleInputChange = (e) => {
    const {
      target: { value },
      keyCode,
    } = e;

    const filteredTags = searchDatas
      .filter((data) => {
        const regExp = new RegExp(`^${value}`, "gi");
        return data.match(regExp);
      })
      .slice(0, 5);
    value.length &&
      keyCode === 13 &&
      props.history.push("/photo?search=${value}");
    setSearchResult(value.length ? filteredTags : []);
    setStateSearchModal(value.length);
    setSearchInput(value);
  };

  const clickBtn = () => {
    searchInput && props.history.push("/photo?search=${searchInput}");
  };

  useEffect(() => {
    fetch(mainsearchAPI)
      .then((res) => res.json())
      .then((res) => {
        setSearchDatas(res.data);
      });
  }, []);

  return (
    <MainSearchWrapper>
      <MainSearchOverlay>
        <ContentsBox>
          <TitleText>Unsplash</TitleText>
          <Flex>
            <SubText>The internet's source of</SubText>
            <StyledLink>freely-usable images</StyledLink>
          </Flex>
          <SubText>Powered by creators everywhere</SubText>
          <SearchBox>
            <FlexInput>
              <SearchBtn onClick={clickBtn}>{searchBtnSvg}</SearchBtn>
              <InputBox
                placeholder="Search free high-resolution photos"
                onKeyUp={handleInputChange}
              />
            </FlexInput>
          </SearchBox>
          <SearchResult stateSearchModal={stateSearchModal}>
            {searchResult.map((tag, id) => {
              return <li key={id}>{tag}</li>;
            })}
          </SearchResult>
        </ContentsBox>
      </MainSearchOverlay>
      <FooterBox>
        <FooterText>Photo of the Day by Mark Olsen</FooterText>
        <FooterText>Read more about the Unsplash License</FooterText>
        <FooterText>Create your website today</FooterText>
      </FooterBox>
    </MainSearchWrapper>
  );
};

export default withRouter(MainSearch);

const MainSearchWrapper = styled.div`
  height: 554px;
  border: 1px solid gray;
  background-image: url("https://images.unsplash.com/photo-1595947006841-0984683d036e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format%2Ccompress&fit=crop&w=1399&h=594");
  overflow: visible;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const MainSearchOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ContentsBox = styled.div`
  width: 70%;
  height: 220px;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
`;

const FlexInput = styled(Flex)`
  align-items: center;
`;

const TitleText = styled.p`
  font-size: 46px;
  color: white;
  padding: 10px 0;
`;
const SubText = styled(TitleText)`
  font-size: 18px;
  padding: 10px 0;
`;

const FooterText = styled(TitleText)`
  font-size: 13px;
  color: rgb(211, 211, 211);
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
  padding: 10px 5px;
  &:hover {
    color: #767676;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  height: 54px;
  margin-top: 10px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;
const SearchBtn = styled.div`
  svg {
    width: 34px;
    height: 20px;
    padding-left: 14px;
    box-sizing: initial;
    fill: #767676;
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 54px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: text;
`;

const SearchResult = styled.ul`
  width: 200px;
  height: 210px;
  border-radius: 4px;
  border: 1px solid rgb(211, 211, 211);
  font-size: 14px;
  background-color: white;
  margin-top: 7px;
  cursor: pointer;
  visibility: ${(props) => (props.stateSearchModal ? "visible" : "hidden")};

  li {
    padding: 12px;
  }
`;

const FooterBox = styled.div`
  width: 100%;
  font-size: 13px;
  /* color: red; */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  cursor: pointer;
`;
