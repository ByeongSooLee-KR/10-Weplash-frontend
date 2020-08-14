import React from "react";
import styled from "styled-components";
import Card from "../../../Card/Card";

const RelatedPhotos = ({
  relatedPhotosColor,
  relatedPhotos,
  setCardData,
  setCardIndex,
  handleScrollToTop,
  isLoaderActive,
  isModalActive,
}) => {
  const handleMoveToNewCard = (nothing, i) => {
    handleScrollToTop();
    setCardData(relatedPhotos);
    setCardIndex(i);
  };

  return (
    <Container>
      <Title>Related Photos</Title>
      <CardWrap>
        {relatedPhotos.map((photo, i) => {
          return (
            <div className="card" key={i}>
              <Card
                card={photo}
                id={i}
                isModalActive={isModalActive}
                onClickModal={handleMoveToNewCard}
                userCardState={false}
                color={relatedPhotosColor}
              />
            </div>
          );
        })}
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
