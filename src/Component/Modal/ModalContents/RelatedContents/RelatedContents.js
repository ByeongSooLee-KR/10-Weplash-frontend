import React from "react";
import styled from "styled-components";
import RelatedCollections from "./RelatedCollections";
import RelatedTags from "./RelatedTags";
import RelatedPhotos from "./RelatedPhotos";

const RelatedContents = ({
  relatedPhotosColor,
  relatedPhotos,
  setCardData,
  setCardIndex,
  handleScrollToTop,
  relatedCollections,
  relatedTags,
  isLoaderActive,
  isModalActive,
}) => {
  return (
    <Container>
      <RelatedPhotos
        relatedPhotosColor={relatedPhotosColor}
        relatedPhotos={relatedPhotos}
        setCardData={setCardData}
        setCardIndex={setCardIndex}
        handleScrollToTop={handleScrollToTop}
        isLoaderActive={isLoaderActive}
        isModalActive={isModalActive}
      />
      <RelatedCollections relatedCollections={relatedCollections} />
      <RelatedTags relatedTags={relatedTags} />
    </Container>
  );
};

export default RelatedContents;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;
