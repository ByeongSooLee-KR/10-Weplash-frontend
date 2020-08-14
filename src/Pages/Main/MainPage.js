import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../Component/Card/Card";
import MainSearch from "./MainSearch";
import Nav from "../../Component/Nav/Nav";
import { TopicCardsAPI } from "../../config";

const MainPage = () => {
  const [main, setMain] = useState([]);
  useEffect(() => {
    fetch(`${TopicCardsAPI}/photo?category=Photo`)
      .then((res) => res.json())
      .then((res) => {
        setMain(res.data);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Nav />
      <MainSearch />
      <MainList>
        {main.map((card, i) => {
          return (
            <div className="card" key={i}>
              <Card
                card={card}
                id={i}
                isModalActive={false}
                userCardState={true}
              />
            </div>
          );
        })}
      </MainList>
    </>
  );
};
export default MainPage;

const MainList = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;
