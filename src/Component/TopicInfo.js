import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { statusSvg, contributionsSvg, topConributorsSvg } from "../config";
import styled from "styled-components";

const TopicInfo = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    fetch("/Data/data.json")
      .then((res) => res.json())
      .then((res) => {
        getData(res.data);
      });
  });

  return (
    <TopicInfoFrame>
      <section>
        <h1>{data.topicTitle}</h1>
        <h2>{data.topicDesc}</h2>
        <img alt="" src={data.curatedImgUrl}></img>
        <p>
          Curated by <Link to="">{data.curatedBy}</Link>
        </p>
      </section>
      <TopicStatus>
        <div>
          <figure>
            {statusSvg}
            <span>Status</span>
            <p className="openclose">
              <span>●</span>
              {data.status}
            </p>
          </figure>
          <figure>
            {contributionsSvg}
            <span>Contributions</span>
            <p>{data.contributions}</p>
          </figure>
          <figure>
            {topConributorsSvg}
            <span>Top Contributors</span>
            <p>{data.topcontributors}</p>
          </figure>
        </div>
        <button>Submit to {data.topicTitle}</button>
      </TopicStatus>
    </TopicInfoFrame>
  );
};

export default withRouter(TopicInfo);

const TopicInfoFrame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
  padding: 60px 12px 72px;
  margin: 0 auto;

  section {
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

    img {
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
      margin-top: 8px;
      font-size: 15px;
      font-family: sans-serif;
      color: ${(props) => props.theme.colors.blackColor};

      a {
        text-decoration: underline;
        font-family: sans-serif;
        color: ${(props) => props.theme.colors.grayColor};

        &:hover {
          color: black;
        }
      }
    }
  }
`;

const TopicStatus = styled.div`
  div {
    width: 416px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 16px;

    figure {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 8px;
      line-height: 1.6;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 14px;
        fill: #d1d1d1;
      }

      p {
        margin-left: auto;
      }

      .openclose {
        padding: 1px 8px;
        border-radius: 4px;
        background-color: #c2ebd3;

        span {
          margin-right: 6px;
          color: #3cb46e;
        }
      }
    }
  }

  button {
    width: 100%;
    height: 44px;
    padding: 0 16px;
    font-size: 15px;
    color: white;
    background-color: ${(props) => props.theme.colors.blackColor};
    border-style: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }
`;
