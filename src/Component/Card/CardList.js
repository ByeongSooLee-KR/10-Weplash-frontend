import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TopicCardsAPI } from "../../config";
import Card from "./Card";
import Loading from "../Loading";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [colors, setColors] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const prevOffset = useRef(0);
  const LIMIT = 20;

  useEffect(() => {
    fetch(`${TopicCardsAPI}/back/${"Travel"}?offset=${offset}&limit=${LIMIT}`)
      .then((res) => res.json())
      .then((res) => {
        setColors(res.data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `${TopicCardsAPI}?category=${"Travel"}&offset=${offset}&limit=${LIMIT}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCards(res.data);
      });
  }, []);

  const checkScrollHeight = () => {
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        console.log("atbottom");
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
      fetch(`${TopicCardsAPI}/back/${"Travel"}?offset=${offset}&limit=${LIMIT}`)
        .then((res) => res.json())
        .then((res) => {
          setColors([...colors, ...res.data]);
        });

      fetch(
        `${TopicCardsAPI}?category=${"Travel"}&offset=${next}&limit=${LIMIT}`
      )
        .then((res) => res.json())
        .then((res) => {
          setCards([...cards, ...res.data]);
          setLoading(false);
        });
      prevOffset.current += 1;
    }
  };

  return (
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
            />
          );
        })}
    </CardListFrame>
  );
};

export default CardList;

const CardListFrame = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;
