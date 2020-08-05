import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";

const CardList = () => {
  const [data, setCards] = useState([]);
  useEffect(() => {
    fetch("/Data/card.json")
      .then((res) => res.json())
      .then((res) => {
        setCards(res.cards);
      });
  }, []);

  return (
    <CardListFrame>
      {data.map((card, idx) => {
        return <Card key={idx} card={card} />;
      })}
    </CardListFrame>
  );
};

export default withRouter(CardList);

const CardListFrame = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;
