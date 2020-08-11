import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { statusSvg, contributionsSvg, topConributorsSvg } from "../icons";

const TopicInfo = ({ data }) => {
  return (
    <TopicInfoFrame>
      <section>
        <h1>{data[0] && data[0].collection}</h1>
        <h2>{data[0] && data[0].description}</h2>
        <p>
          Supported by
          <Link to="">
            <img
              alt="Supporter"
              src="https://images.unsplash.com/file-1594221993978-c8dc66413675image"
            />
          </Link>
        </p>
      </section>
      <TopicStatus>
        <div>
          <figure>
            {statusSvg}
            <span>Status</span>
            <p className="openclose">
              <span>●</span>
              OPEN
            </p>
          </figure>
          <figure>
            {contributionsSvg}
            <span>Contributions</span>
            <p>{data[0] && data[0].contributions}</p>
          </figure>
          <figure>
            <section>
              {topConributorsSvg}
              <span>Top Contributors</span>
            </section>
            <section className="contributorsImg">
              {data[0] &&
                data[0].topcontributors.map((profile, idx) => {
                  return (
                    <img
                      key={idx}
                      alt="ProfileImg"
                      src={profile.profile_image}
                    />
                  );
                })}
            </section>
          </figure>
        </div>
        <button>Submit to {data[0] && data[0].collection}</button>
      </TopicStatus>
    </TopicInfoFrame>
  );
};

export default TopicInfo;

const TopicInfoFrame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
  padding: 60px 12px 72px;
  margin: 0 auto;
  margin-top: 100px;

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
      width: 150px;
      margin-left: 10px;
    }

    p {
      display: flex;
      align-items: center;
      margin-top: 8px;
      font-size: 15px;
      font-family: sans-serif;
      color: ${(props) => props.theme.colors.grayColor};
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
        color: #111;
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
  .contributorsImg {
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      cursor: pointer;
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
