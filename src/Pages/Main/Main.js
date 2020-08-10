import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Modal from "../../Component/Modal/Modal";
import API_URL from "../../api";

const Main = () => {
  const [isModalActive, setModalActive] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [originCardData, setOriginCardData] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [photoId, setPhotoId] = useState(0);

  const handleModal = (idx) => {
    setModalActive(!isModalActive);
    setCardIndex(idx);
    // isModalActive && setCardData(originCardData);
  };

  const handleIndex = (newIdx) => {
    setCardIndex(newIdx);
    setPhotoId(cardData[newIdx].id);
  };

  const handleOpenModal = (photoId, idx) => {
    handleModal(idx);
    setPhotoId(photoId);
  };

  useEffect(() => {
    isModalActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModalActive]);

  //서버연결
  useEffect(() => {
    fetch(`${API_URL}/photo?category=Travel`)
      .then((res) => res.json())
      .then((res) => {
        setOriginCardData(res.data);
        setCardData(res.data);
      });
  }, []);

  return (
    <>
      <div>
        {originCardData.map((card, i) => {
          return (
            <img
              card={card}
              onClick={() => handleOpenModal(card.id, i)}
              alt="item"
              src={card.image}
              key={i}
            />
          );
        })}
      </div>
      {isModalActive && cardData.length > 0 && (
        <Modal
          handleModal={handleModal}
          cardData={cardData}
          setCardData={setCardData}
          cardIndex={cardIndex}
          setCardIndex={setCardIndex}
          handleIndex={handleIndex}
          cardLength={cardData.length}
          photoId={photoId}
        />
      )}
    </>
  );
};

export default withRouter(Main);
