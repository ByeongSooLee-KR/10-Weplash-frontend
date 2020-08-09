import React from "react";
import styled from "styled-components";

const CollectionModal = ({ img }) => {
  console.log(img);
  return (
    <CollectionModalFrame>
      <div className="collectionModal">
        <div className="collectionTitle" src={img} />
        <div className="">
          <h3>Add to Collection</h3>
          <button>Create a new Collection</button>
          {/* <CollectionCard /> */}
        </div>
      </div>
    </CollectionModalFrame>
  );
};
export default CollectionModal;

const CollectionModalFrame = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);

  .collectionModal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 990px;
    height: 560px;
    background-color: white;
    .collectionTitle {
      width: 333px;
      height: 560px;
      overflow: hidden;
      background-image: ${(props) => `url("${props.src}")`};
      background-size: cover;
    }
  }
`;
