import React from "react";
import styled from "styled-components";
import CardTopBtns from "./CardTopBtns";
import CardUser from "./CardUser";

const Card = ({ card }) => {
  const height = (card.height * 416) / card.width;
  return (
    <CardFrame height={Math.round(height, 0)}>
      <div className="hover">
        <CardTopBtns data={card} />
        <CardUser data={card} />
      </div>
      <img alt="imageCard" src={card.image} />
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
    opacity: 0;
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

    &:hover {
      opacity: 1;
      transition: 0.2s;
    }
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
`;
