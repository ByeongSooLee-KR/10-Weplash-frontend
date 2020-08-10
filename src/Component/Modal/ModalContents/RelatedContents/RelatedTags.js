import React from "react";
import styled from "styled-components";
import HashTag from "../../Buttons/HashTag";

const RelatedTags = ({ relatedTags }) => {
  return (
    <Container>
      <Title>Related Tags</Title>
      <div className="tagBox">
        {relatedTags.map((tag, i) => {
          return <HashTag tag={tag} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default RelatedTags;

// Styled Components

const Container = styled.div`
  margin: 12px;

  .tagBox {
    display: flex;
    flex-direction: flex-start;
    margin: 12px;
    flex-wrap: wrap;
  }
`;

const Title = styled.p`
  max-width: 100%;
  height: 104px;
  padding-top: 60px;
  padding-bottom: 16px;
  margin: 12px;
  font-size: 18px;
`;
