import React, { useState } from "react";
import styled from "styled-components";
import {
  checkedSvg,
  uncheckedSvg,
  addCollectionSvg,
  lockSvg,
} from "../../icons";

const CollectionCards = ({ collection, clickAddPhoto }) => {
  const [hover, setHover] = useState(false);
  const [exist, setExist] = useState(collection.photo_exist);
  const [check, setCheck] = useState(true);

  return (
    <CollectionCardsFrame
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setExist(!exist);
        clickAddPhoto(collection);
      }}
      hover={hover}
      first_image={collection.first_image && collection.first_image}
    >
      <CollectionList hover={hover} exist={exist}>
        <CollectionName>
          <p>
            <span>{collection.photo_count} </span>photos
          </p>
          <div className="name">
            {collection.private_status && <i>{lockSvg}</i>}
            <span>{collection.collection_name}</span>
          </div>
        </CollectionName>

        {hover &&
          (!exist ? (
            <button>{addCollectionSvg}</button>
          ) : (
            <button
              onMouseEnter={() => setCheck(true)}
              onMouseLeave={() => setCheck(false)}
            >
              {check ? uncheckedSvg : checkedSvg}
            </button>
          ))}
      </CollectionList>
    </CollectionCardsFrame>
  );
};
export default CollectionCards;

const CollectionCardsFrame = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 12px;
  padding: 23px 20px;
  color: white;
  border-style: none;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.first_image})`};
  background-size: cover;
  background-color: #d1d1d1;
  outline: none;
  cursor: pointer;
  animation-name: anime;
  animation-duration: 1s;

  @keyframes anime {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CollectionList = styled.div`
  opacity: ${(props) => (props.hover ? 1.0 : 0.6)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: 21px;
  color: "white";

  p {
    font-size: 12px;
    font-weight: 300;
  }

  button {
    background-color: transparent;
    border-style: none;
    outline: none;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
      fill: white;
    }
  }
`;

const CollectionName = styled.div`
  .name {
    display: flex;

    i {
      width: 13px;
      height: 13px;
      margin-right: 8px;
      fill: white;
    }
  }
`;
