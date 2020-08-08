import React from "react";
import MainSearch from "./MainSearch";
import Topic from "../Topic/Topic";
import CardList from "../../Component/Card/CardList";
import Nav from "../../Component/Nav/Nav";

const MainPage = () => {
  return (
    <>
      <Nav />
      <MainSearch />
      <CardList />
    </>
  );
};
export default MainPage;
