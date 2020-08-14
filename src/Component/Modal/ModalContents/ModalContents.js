import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import Share from "../Buttons/ShareIcon";
import InfoIcon from "../Buttons/InfoIcon";
import RelatedContents from "./RelatedContents/RelatedContents";
import BtnDirection from "../Buttons/BtnDirection";

const ModalContent = ({
  photoId,
  cardData,
  cardIndex,
  setCardData,
  relatedTags,
  relatedPhotosColor,
  relatedPhotos,
  relatedCollections,
  setCardIndex,
  handleScrollToTop,
  handleIndex,
  isLoaderActive,
  isModalActive,
}) => {
  const [isImgFull, setImgFull] = useState(false);

  useEffect(() => {
    setImgFull(false);
  }, [cardIndex]);

  return (
    <>
      <BtnDirection
        cardIndex={cardIndex}
        handleIndex={handleIndex}
        cardLength={cardData.length}
      />
      <ContainerWrap>
        <Container>
          <div>
            <HeaderContainer>
              <header>
                <Left>
                  <span>
                    <div className="profileImg">
                      <Link to="/">
                        <img
                          src={cardData[cardIndex].user_profile_image}
                          alt="profile"
                        />
                      </Link>
                    </div>
                    <div className="profileInfo">
                      <div className="name">
                        {cardData[cardIndex].user_name}
                      </div>
                      <div className="tag">
                        @{cardData[cardIndex].user_first_name}
                      </div>
                    </div>
                  </span>
                </Left>
                <Buttons cardData={cardData[cardIndex]} photoId={photoId} />
              </header>
            </HeaderContainer>
            <ImgContainer isImgFull={isImgFull}>
              <div>
                <img
                  onClick={() => setImgFull(!isImgFull)}
                  src={cardData[cardIndex].image}
                  alt="item"
                />
              </div>
            </ImgContainer>
          </div>
          <Bottom>
            <LocationInfo locationExistence={cardData[cardIndex].location}>
              <div>
                <svg
                  width="32"
                  height="32"
                  className="_15of1"
                  version="1.1"
                  viewBox="0 0 32 32"
                  aria-hidden="false"
                >
                  <path d="M16 0c-6.7 0-12 5.3-12 12 0 8.6 8.6 17.3 11.2 19.7.4.4 1.1.4 1.5 0 2.7-2.4 11.3-11.1 11.3-19.7 0-6.7-5.3-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                </svg>
                <span>{cardData[cardIndex].location}</span>
              </div>
              <p>
                <span>
                  {cardData[cardIndex].location === "Null"
                    ? "Photo"
                    : cardData[cardIndex].location}
                </span>
                <span> by {cardData[cardIndex].user_first_name}</span>
                <span>{cardData[cardIndex].user_last_name}</span>
                <span>
                  (@
                  {cardData[cardIndex].user_name})
                </span>
              </p>
            </LocationInfo>
            <Share></Share>
            <InfoIcon></InfoIcon>
          </Bottom>
          <RelatedContents
            relatedTags={relatedTags}
            relatedPhotosColor={relatedPhotosColor}
            relatedPhotos={relatedPhotos}
            relatedCollections={relatedCollections}
            setCardData={setCardData}
            setCardIndex={setCardIndex}
            handleScrollToTop={handleScrollToTop}
            isLoaderActive={isLoaderActive}
            isModalActive={isModalActive}
          />
        </Container>
      </ContainerWrap>
    </>
  );
};

export default ModalContent;

// Styled Components

const ContainerWrap = styled.div`
  ${(props) => props.theme.flexCenter};
  border-radius: 4px;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  z-index: 10;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
`;

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: sticky;
  top: -35px;
  z-index: 1;

  header {
    display: flex;
    align-items: center;
    padding: 9px 12px;
  }
`;

const Left = styled.div`
  margin-right: auto;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    .profileImg {
      margin-right: 8px;
    }

    .profileInfo {
      line-height: 1.35;

      .name {
        font-size: 15px;
        font-weight: 500;
      }

      .tag {
        font-size: 11px;
        letter-spacing: 0.02em;
        color: #767676;
      }
    }
  }

  a {
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`;

const ImgContainer = styled.div`
  padding: ${(props) => (props.isImgFull ? "0" : "10px 16px")};

  div {
    display: flex;
    justify-content: center;
    min-width: ${(props) => (props.isImgFull ? "100%" : "400px")};
    max-width: calc((100vh - 175px) * 0.8);
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      max-height: ${(props) => (props.isImgFull ? "100%" : "1131px")};
      cursor: ${(props) => (props.isImgFull ? "zoom-out" : "zoom-in")};
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  height: 80px;
  padding: 9px 12px;
  background-color: inherit;

  div {
    padding: 4px;
  }
`;

const LocationInfo = styled.div`
  line-height: 1.6;
  margin-right: auto;

  div {
    display: ${(props) =>
      props.locationExistence === "Null" ? "none" : "block"};
    font-size: 12px;
    &:hover {
      text-decoration: underline;
    }

    svg {
      box-sizing: initial;
      height: 13px;
      width: 13px;
      fill: #c1c1c1;
      margin-right: 6px;
      margin-bottom: 1px;
    }
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: #767676;
  }
`;
