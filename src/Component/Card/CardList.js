import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "./Card";
import Modal from "../Modal/Modal";
import Loading from "../Loading";
import { TopicCardsAPI, tokentoken } from "../../config";

const CardList = ({ topic }) => {
  const isLoaded = topic[0] !== undefined;
  const [cards, setCards] = useState([]);
  const [colors, setColors] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  //Modal
  const [isModalActive, setModalActive] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [photoId, setPhotoId] = useState(0);
  /////
  const prevOffset = useRef(0);
  const LIMIT = 20;

  const fetchData = (api, data, setData) => {
    fetch(`${TopicCardsAPI}${api}offset=${offset}&limit=${LIMIT}`, {
      headers: {
        // Authorization: localStorage.getItem("access_token"),
        Authorization: tokentoken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData([...data, ...res.data]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isLoaded) {
      fetchData(`/back/${topic[0].collection}?`, colors, setColors);
      fetchData(`?category=${topic[0].collection}&`, cards, setCards);
    }
  }, [isLoaded]);

  const checkScrollHeight = () => {
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setOffset(offset + 1);
        setLoading(true);
        handleScroll(offset + 1);
      }
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  });

  const handleScroll = (next) => {
    if (next !== prevOffset.current) {
      fetchData(`/back/${topic[0].collection}?`, colors, setColors);
      fetchData(`?category=${topic[0].collection}&`, cards, setCards);
      prevOffset.current += 1;
    }
  };

  //Modal
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

  useEffect(() => {
    setCardData(cards);
  }, [cards]);
  /////

  return (
    <>
      <CardListFrame>
        {loading && <Loading load={loading} />}
        {cards &&
          cards.map((card, id) => {
            return (
              <Card
                key={id}
                id={id}
                card={card}
                color={colors.map((color) => {
                  return color.background_color;
                })}
                onClickModal={handleOpenModal}
                isModalActive={isModalActive}
                userCardState={true}
              />
            );
          })}
      </CardListFrame>
      {isModalActive && cardData.length > 0 && (
        <Modal
          handleModal={handleModal}
          cardData={cardData}
          setCardData={setCardData}
          cardIndex={cardIndex}
          setCardIndex={setCardIndex}
          handleIndex={handleIndex}
          photoId={photoId}
        />
      )}
    </>
  );
};

export default CardList;

const CardListFrame = styled.div`
  margin: 0 auto;
  width: 1320px;
  column-width: 416px;
  column-gap: 5px;
`;
