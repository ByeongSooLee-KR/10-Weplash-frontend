import React from "react";
import styled from "styled-components";
import Nav from "../../Component/Nav/Nav";
import TopicInfo from "../../Component/TopicInfo";
import CardList from "../../Component/Card/CardList";

const Topic = () => {
  return (
    <>
      <Nav />
      <TopicFrame>
        <TopicInfo />
        <CardList />
      </TopicFrame>
    </>
  );
};

export default Topic;

const TopicFrame = styled.div`
  margin-top: 124px;
`;
