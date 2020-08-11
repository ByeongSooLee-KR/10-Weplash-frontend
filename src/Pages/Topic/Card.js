import React, { useState } from "react";
import styled from "styled-components";
import CardTopBtns from "./CardTopBtns";
import CardUser from "./CardUser";

const Card = ({ card, color, id, onClickModal, isModalActive }) => {
  const [show, setShow] = useState(false);
  const height = (card.height * 416) / card.width;

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

  return (
    // <CardFrame color={color[id]}>
    <CardFrame onClick={() => onClickModal(card.id, id)}>
      {
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {show && (
            <div className="hover">
              <CardTopBtns data={card} img={card.image} id={id} />
              <CardUser isModalActive={isModalActive} data={card} />
            </div>
          )}
          <img
            alt="ImageCard"
            className="imageCard"
            src={card.image}
            color={color}
          />
        </div>
      }
    </CardFrame>
  );
};

export default Card;

const CardFrame = styled.figure`
  position: relative;
  display: inline-block;
  width: 416px;
  height: ${(props) => `${props.height}px`};
  margin-bottom: 23px;
  cursor: zoom-in;

  .hover {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }

  .imageCard {
    display: block;
    width: 100%;
    height: ${(props) => `${props.height}px`};
    background-color: ${(props) => props.color};
  }
`;
