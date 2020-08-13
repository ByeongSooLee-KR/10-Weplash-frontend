import React, { useState } from "react";
import styled from "styled-components";
import { likeBtnSvg, collectBtnSvg } from "../../icons";
import { TopicCardsAPI } from "../../config";
import theme from "../../Styles/StyleTheme";

const {
  colors: { grayColor, redColor },
} = theme;

const CardTopBtns = ({
  data,
  show,
  collectionModalActive,
  setCollectionModalActive,
}) => {
  const [like, setLikeBtn] = useState(data.user_like);
  const handleLikeBtn = () => {
    fetch(`${TopicCardsAPI}/heart`, {
      method: "PATCH",
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        photo_id: data.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => setLikeBtn(res.user_like));
  };

  const [collect, setCollectBtn] = useState(data.user_collection);
  const handleCollectBtn = () => {
    setCollectBtn(!collect);
    setCollectionModalActive(!collectionModalActive);
  };

  return (
    <CardTopBtnsFrame show={show}>
      <Buttons btn="like" active={like} onClick={handleLikeBtn}>
        {likeBtnSvg}
      </Buttons>
      <Buttons btn="collect" active={collect} onClick={handleCollectBtn}>
        {collectBtnSvg}
      </Buttons>
    </CardTopBtnsFrame>
  );
};

export default CardTopBtns;

const CardTopBtnsFrame = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: ${({ show }) => (show ? "flex" : "none")};
  z-index: 1;
`;

const Buttons = styled.button`
  opacity: 0.8;
  margin-left: 8px;
  padding: 6px 12px;
  border-style: none;
  border-radius: 4px;
  outline: none;
  background-color: ${({ active, btn }) =>
    active &&
    (btn === "like" ? redColor : btn === "collect" ? "#3cb46e" : "white")};
  cursor: pointer;

  svg {
    width: 16px;
    fill: ${({ active }) => (active ? "white" : grayColor)};
  }

  &:hover {
    opacity: 1;
  }
`;
