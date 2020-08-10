import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HashTag from "../Modal/Buttons/HashTag";

const Collection = ({ collection }) => {
  return (
    <Container>
      <div className="imageWrap">
        <div className="imageBox">
          <Link>
            <div className="imageWrap">
              <div className="left">
                <img
                  src="https://images.unsplash.com/photo-1542108613-4c236d7eb28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60"
                  alt="item"
                />
              </div>
              <div className="right">
                <div className="rightTop">
                  <img
                    src="https://images.unsplash.com/photo-1524090485940-4ded7244c483?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60"
                    alt="item"
                  />
                </div>
                <div className="rightBottom">
                  <img src={collection.image[0]} alt="item" />
                </div>
              </div>
            </div>
            <div className="title">
              <div>Once upon a World</div>
            </div>
            <div className="copyWrite">
              <div>{collection.photos_number} photos</div>
              <span>· Curated by </span>
              <span>{collection.user_first_name}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="tagBox">
        {collection.tags.map((tag, i) => {
          return <HashTag tag={tag} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default Collection;

// Styled Components

const Container = styled.div`
  width: 416px;
  height: 403px;

  .imageWrap {
    border-radius: 4px;
    overflow: hidden;

    .imageBox {
      width: 416px;
      height: 356.19px;

      .imageWrap {
        display: flex;
        height: 291.19px;
        margin-bottom: 16px;

        &:hover {
          filter: alpha(opacity=80);
          opacity: 0.9;
          transition: 0.2s;
        }

        .left {
          width: 70%;
          margin-right: 2px;
          overflow: hidden;
        }

        .right {
          width: 30%;

          .rightTop {
            height: 50%;
            margin-bottom: 2px;
            overflow: hidden;
          }

          .rightBottom {
            height: 50%;
          }
        }
      }

      .title {
        margin-bottom: 8px;
        color: #111;
      }

      .copyWrite {
        display: flex;
        font-size: 14px;
        color: #767676;
        margin-bottom: 13px;
      }
    }
  }

  .tagBox {
    display: flex;
    flex-direction: flex-start;
    width: 416px;
    height: 34px;
  }
`;
