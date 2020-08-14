import React from "react";
import styled from "styled-components";
import CollectionCards from "./CollectionCards";
import { TopicCardsAPI } from "../../config";

const AddCollection = ({
  setCreateModal,
  createModal,
  data,
  collections,
  setCollections,
}) => {
  const clickAddPhoto = (collection) => {
    fetch(`${TopicCardsAPI}/add`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        photo_id: data.id,
        collection_name: collection.collection_name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCollections(res.data);
      });
  };

  return (
    <AddCollectionFrame>
      <h3>Add to Collection</h3>
      <CreateCollection onClick={() => setCreateModal(!createModal)}>
        Create a new Collection
      </CreateCollection>
      {collections.length > 0 &&
        collections.map((item, idx) => {
          return (
            <CollectionCards
              key={idx}
              collection={item}
              clickAddPhoto={clickAddPhoto}
            />
          );
        })}
    </AddCollectionFrame>
  );
};

export default AddCollection;

const AddCollectionFrame = styled.div`
  margin-left: 333px;
  padding: 0 40px;
  width: 567px;
  overflow-y: scroll;
  z-index: 8;
  animation: anime 1s linear;

  @keyframes anime {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h3 {
    margin: 32px 0;
    font-size: 28px;
    font-weight: bolder;
  }
`;

const CreateCollection = styled.button`
  width: 100%;
  margin-bottom: 12px;
  padding: 26px 20px;
  font-size: 21px;
  text-align: left;
  color: #767676;
  border: 2px dashed #d1d1d1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;
