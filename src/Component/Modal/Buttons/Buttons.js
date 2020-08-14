import React, { useState } from "react";
import styled from "styled-components";
// import HeartIcon from "./HeartIcon";
// import AddIcon from "./AddIcon";
import CollectionModal from "../../Collection/CollectionModal";
import CardTopBtns from "../../Card/CardTopBtns";
import DownloadIcon from "./DownloadIcon";

const Buttons = ({ cardData, photoId }) => {
  const [collectionModalActive, setCollectionModalActive] = useState(false);

  return (
    <Container>
      {/* <HeartIcon heartState={cardData.user_like} />
      <AddIcon collectionState={cardData.user_collection} /> */}
      <CardTopBtns
        data={cardData}
        id={photoId}
        show={true}
        collectionModalActive={collectionModalActive}
        setCollectionModalActive={setCollectionModalActive}
      />
      {collectionModalActive && (
        <CollectionModal
          data={cardData}
          collectionModalActive={collectionModalActive}
          setCollectionModalActive={setCollectionModalActive}
        />
      )}
      {/* <DownloadIcon /> */}
    </Container>
  );
};

export default Buttons;

// Styled Components

const Container = styled.div`
  display: flex;
  width: 226.67px;
  height: 40px;
  background-color: #fff;
`;
