import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Component/Nav/Nav";
import Card from "../Component/Card/Card";
import { TopicCardsAPI } from "../config";

const Following = () => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    fetch(`${TopicCardsAPI}?category=Following`, {
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFollowing(res.data);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <FollowingFrame>
        <section>
          <h1>Following</h1>
          <h2>The latest photos from photographers you follow.</h2>
        </section>
        <FollowingList>
          {following.map((card, i) => {
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
        </FollowingList>
      </FollowingFrame>
    </>
  );
};

export default Following;

const FollowingFrame = styled.div`
  width: 1320px;
  margin: 0 auto;
  margin-top: 124px;
  section {
    padding: 60px 12px 72px;
    h1 {
      font-size: 46px;
      line-height: 1.2;
      margin: 0 0 16px;
    }

    h2 {
      margin: 0 0 24px;
      width: 620px;
      font-size: 18px;
      font-family: sans-serif;
    }
  }
`;

const FollowingList = styled.div`
  width: 1320px;
  margin: 0 auto;
  column-width: 416px;
  column-gap: 5px;
`;
