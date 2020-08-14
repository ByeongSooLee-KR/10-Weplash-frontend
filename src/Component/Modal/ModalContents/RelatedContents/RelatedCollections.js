import React from "react";
import styled from "styled-components";
import Collection from "../../../Collection/Collection";

const RelatedCollections = ({ relatedCollections, userData }) => {
  return (
    <Container>
      <Title>Related collections</Title>
      <CollectionsContainer>
        {relatedCollections.map((collection, i) => {
          return <Collection collection={collection} key={i} />;
        })}
      </CollectionsContainer>
    </Container>
  );
};

export default RelatedCollections;

// Styled Components

const Container = styled.div`
  margin: 12px;
`;

const Title = styled.p`
  max-width: 100%;
  height: 104px;
  padding-top: 60px;
  padding-bottom: 16px;
  margin: 12px;
  font-size: 18px;
`;

const CollectionsContainer = styled.div`
  margin: 0 12px 12px 12px;
  display: flex;
`;
