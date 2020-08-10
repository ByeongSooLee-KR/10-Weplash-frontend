import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BtnClose from "./Buttons/BtnClose";
import ModalContents from "./ModalContents/ModalContents";
import API_URL from "../../api";

const Modal = ({
  photoId,
  handleModal,
  cardData,
  cardIndex,
  setCardData,
  handleIndex,
  setCardIndex,
  isModalActive,
}) => {
  const [relatedPhotos, setRelatedPhotos] = useState([]);
  const [relatedTags, setRelatedTags] = useState([]);
  const [relatedCollections, setRelatedCollections] = useState([]);

  useEffect(() => {
    handleRelatedInfo();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoId]);

  const scrollToTop = useRef();

  const handleRelatedInfo = () => {
    setRelatedPhotos([]);
    handleScrollToTop();

    fetch(`${API_URL}/photo/related-photo/${photoId}`)
      .then((res) => res.json())
      .then((res) => {
        setRelatedTags(res.tags);
        setRelatedPhotos(res.data);
      });

    fetch(`${API_URL}/photo/related-collection/22`)
      .then((res) => res.json())
      .then((res) => {
        setRelatedCollections(res.data);
      });
  };

  const handleScrollToTop = () => {
    scrollToTop.current.scrollTo(0, 0, { behavior: "smooth" });
  };

  const handleModalClose = (e) => {
    if (e.target !== e.currentTarget) return;
    handleModal();
  };

  return (
    <Dimmer onClick={(e) => handleModalClose(e)} ref={scrollToTop}>
      <BtnClose handleModal={handleModal} />
      <ModalContents
        cardData={cardData}
        cardIndex={cardIndex}
        setCardData={setCardData}
        relatedPhotos={relatedPhotos}
        relatedTags={relatedTags}
        relatedCollections={relatedCollections}
        setCardIndex={setCardIndex}
        handleIndex={handleIndex}
        handleScrollToTop={handleScrollToTop}
        isModalActive={isModalActive}
      />
    </Dimmer>
  );
};

export default Modal;

const Dimmer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 35px 6vw 100px;
`;

// const Loader = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   z-index: 0;
//   display: ${(props) => !props.isLoaderActive && "none"};
// `;
