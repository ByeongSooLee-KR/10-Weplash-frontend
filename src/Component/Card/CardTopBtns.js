import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { likeBtnSvg, collectBtnSvg } from "../../config";
import styled from "styled-components";
import theme from "../../Styles/StyleTheme";

const {
  colors: { grayColor, redColor },
} = theme;

const CardTopBtns = () => {
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
  const handlecollectBtn = () => {
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
        // onClick={() => handlecollectBtn(id)}
        onClick={handlecollectBtn}
      >
        {collectBtnSvg}
      </Buttons>
    </CardTopBtnsFrame>
  );
};

export default withRouter(CardTopBtns);

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
