import React, { useState } from "react";
import styled from "styled-components";
import { likeBtnSvg, collectBtnSvg } from "../../icons";
import theme from "../../Styles/StyleTheme";

const {
  colors: { grayColor, redColor },
} = theme;

const CardTopBtns = ({ img }) => {
  const [like, setLikeBtn] = useState(false);
  const handleLikeBtn = () => {
    setLikeBtn(!like);

    // fetch(likeAPI, {
    //   method: "POST",
    //   headers: {
    //     access_token: localStorage.getItem("access_token"),
    //   },
    //   body: JSON.stringify({ imageId: id }),
    // })   API 구현 후 주석 해제하겠습니다 :o
  };

  const [collect, setCollectBtn] = useState(false);
  const handleCollectBtn = () => {
    setCollectBtn(!collect);
    // fetch(collectAPI, {
    //   method: "POST",
    //   headers: {
    //     access_token: localStorage.getItem("access_token"),
    //   },
    //   body: JSON.stringify({ imageId: id }),
    // })   API 구현 후 주석 해제하겠습니다 :o
  };

  return (
    <CardTopBtnsFrame>
      <Buttons
        active={like}
        // onClick={() => handleLikeBtn(id)}
        onClick={handleLikeBtn}
      >
        {likeBtnSvg}
      </Buttons>
      <Buttons
        active={collect}
        // onClick={() => handleCollectBtn(id)}
        onClick={handleCollectBtn}
      >
        {collectBtnSvg}
      </Buttons>
    </CardTopBtnsFrame>
  );
};

export default CardTopBtns;

const CardTopBtnsFrame = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  top: 20px;
  right: 20px;
`;

const Buttons = styled.button`
  opacity: 0.8;
  margin-left: 8px;
  padding: 6px 12px;
  border-style: none;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? redColor : "white")};
  outline: none;
  cursor: pointer;
  svg {
    width: 16px;
    fill: ${({ active }) => (active ? "white" : grayColor)};
  }
  &:hover {
    opacity: 1;
  }
`;
