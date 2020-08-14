import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../Component/Nav/Nav";
import TopicInfo from "../../Component/TopicInfo";
import CardList from "../../Component/Card/CardList";
import { TopicCardsAPI } from "../../config";

const Topic = () => {
  const [topic, setTopic] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`${TopicCardsAPI}/main-collection?category=${category}`)
      .then((res) => res.json())
      .then((res) => {
        setTopic(res.data);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <>
      <Nav />
      <TopicFrame>
        <TopicInfo data={topic} />
        {topic.length > 0 && <CardList topic={topic} />}
      </TopicFrame>
    </>
  );
};

export default Topic;

const TopicFrame = styled.div`
  margin-top: 124px;
`;
