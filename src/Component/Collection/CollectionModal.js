import React from "react";
import styled from "styled-components";
import Dimmer from "../Dimmer";

const CollectionModal = ({ img, setCollectionModalActive }) => {
  return (
    <CollectionModalFrame>
      <div className="collectionModal">
        <div className="collectionTitle" img={img} />
        <div className="">
          <h3>Add to Collection</h3>
          <button>Create a new Collection</button>
          {/* <CollectionCard /> */}
        </div>
      </div>
      <Dimmer setCollectionModalActive={setCollectionModalActive} />
    </CollectionModalFrame>
  );
};
export default CollectionModal;

const CollectionModalFrame = styled.div`
  .collectionModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 990px;
    height: 560px;
    background-color: white;
    z-index: 20;
    .collectionTitle {
      position: fixed;
      width: 333px;
      height: 560px;
      overflow: hidden;
      background-image: ${(props) => `url("${props.img}")`};
      background-size: cover;
    }
  }
`;
