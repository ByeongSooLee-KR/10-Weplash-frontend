import React, { useRef } from "react";
import styled from "styled-components";
import Card from "../../../Card/Card";

const RelatedPhotos = ({
  relatedPhotos,
  setCardData,
  setCardIndex,
  handleScrollToTop,
  isLoaderActive,
  isModalActive,
}) => {
  const handleMoveToNewCard = (nothing, i) => {
    console.log("넌 불리고 있니?", nothing, i);
    handleScrollToTop();
    setCardData(relatedPhotos);
    setCardIndex(i);
  };

  const selectCurrentTarget = useRef();

  return (
    <Container>
      <Title>Related Photos</Title>
      <CardWrap>
        {relatedPhotos.map((photo, i) => {
          return (
            <div className="card" ref={selectCurrentTarget} key={i}>
              <Card
                card={photo}
                id={i}
                isModalActive={isModalActive}
                onClickModal={handleMoveToNewCard}
                userCardState={false}
              />
            </div>
          );
        })}
        <Loader id="여기가 로더" isLoaderActive={isLoaderActive}>
          <div className="ui active inline loader"></div>
        </Loader>
      </CardWrap>
    </Container>
  );
};

export default RelatedPhotos;

const Container = styled.div`
  margin: 12px;
  overflow: hidden;
`;

const Title = styled.p`
  max-width: 100%;
  height: 104px;
  padding-top: 60px;
  padding-bottom: 16px;
  margin: 12px;
  font-size: 18px;
`;

const CardWrap = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;

const Loader = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%; */
  z-index: 10;
  display: ${(props) => !props.isLoaderActive && "none"};
`;
