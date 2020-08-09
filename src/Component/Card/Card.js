import React from "react";
import styled from "styled-components";
import CardTopBtns from "./CardTopBtns";
import CardUser from "./CardUser";

const Card = ({ card, color, id }) => {
  const height = (card.height * 416) / card.width;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.backgroundColor = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -200px 0px" }
  );
  document.querySelectorAll(".imageCard").forEach((img) => {
    observer.observe(img);
  });

  return (
    <CardFrame height={Math.round(height, 0)} color={color[id]}>
      {
        <>
          <div className="hover">
            <CardTopBtns data={card} />
            <CardUser data={card} />
          </div>
          <img alt="" className="imageCard" src={card.image} />
        </>
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

  .imageCard {
    display: block;
    width: 100%;
    height: ${(props) => `${props.height}px`};
    background-color: ${(props) => props.color};
  }
`;
