import React, { useState, useEffect, useParams } from "react";
import styled from "styled-components";
import Nav from "../../Component/Nav/Nav";
import TopicInfo from "../../Component/TopicInfo";
import CardList from "../../Component/Card/CardList";
import { TopicCardsAPI } from "../../config";

const Topic = () => {
  const [topic, setTopic] = useState([]);
  // const { category } = useParams(); merge 후 사용

  useEffect(() => {
    fetch(`${TopicCardsAPI}/collection-main?category=${"Nature"}`)
      .then((res) => res.json())
      .then((res) => {
        setTopic(res.data);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <TopicFrame>
        <TopicInfo data={topic} />
        <CardList topic={topic} />
      </TopicFrame>
    </>
  );
};

export default Topic;

const TopicFrame = styled.div`
  margin-top: 124px;
`;
