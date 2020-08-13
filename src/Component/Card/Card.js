import React, { useState } from "react";
import styled from "styled-components";
import CollectionModal from "../Collection/CollectionModal";
import CardTopBtns from "./CardTopBtns";
import CardUser from "./CardUser";

const Card = ({ card, color, id, onClickModal, userCardState }) => {
  const [show, setShow] = useState(false);

  const options = { thershold: 1.0 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.backgroundColor = entry.target.color;
      }
    });
  }, options);
  document.querySelectorAll(".imageCard").forEach((img) => {
    observer.observe(img);
  });

  const [collectionModalActive, setCollectionModalActive] = useState(false);

  return (
    <CardFrame>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <CardTopBtns
          data={card}
          id={id}
          show={show}
          setCollectionModalActive={setCollectionModalActive}
          collectionModalActive={collectionModalActive}
        />
        {show && <CardUser data={card} userCardState={userCardState} />}
        {show && <HoverStyle onClick={() => onClickModal(card.id, id)} />}
        <img
          alt="ImageCard"
          className="imageCard"
          src={card.image}
          color={color}
        />
      </div>
      {collectionModalActive && (
        <CollectionModal
          data={card}
          collectionModalActive={collectionModalActive}
          setCollectionModalActive={setCollectionModalActive}
        />
      )}
    </CardFrame>
  );
};

export default Card;

const HoverStyle = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.2s;
`;

const CardFrame = styled.figure`
  position: relative;
  display: inline-block;
  width: 416px;
  height: ${(props) => `${props.height}px`};
  margin-bottom: 23px;
  cursor: zoom-in;

  .imageCard {
    width: 100%;
    height: ${(props) => `${props.height}px`};
    background-color: ${(props) => props.color};
  }
`;
