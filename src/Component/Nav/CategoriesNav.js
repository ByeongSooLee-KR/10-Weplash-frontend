import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navData } from "./navData";

const Category = ({ category }) => {
  return (
    <Link>
      <li>{category}</li>
    </Link>
  );
};

const CategoriesNav = () => {
  const [editorials, categories, viewAll] = navData;

  return (
    <CategoryContainer>
      <Left>
        <ul>
          {editorials.map((category) => {
            return <Category category={category} />;
          })}
        </ul>
      </Left>
      <div className="border" />
      <Categories>
        <div>
          <ul>
            {categories.map((category) => {
              return <Category category={category} />;
            })}
          </ul>
        </div>
      </Categories>
      <Right>
        <div className="gradient" />
        <ul>
          <Category category={viewAll} />
        </ul>
      </Right>
    </CategoryContainer>
  );
};

export default CategoriesNav;

const CategoryContainer = styled.div`
  height: 62px;
  display: flex;
  background-color: #fff;

  .border {
    background-color: #d1d1d1;
    width: 1px;
    margin-top: 12px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }

  a {
    font-size: 14px;
    color: #767676;
    &:hover {
      color: #111;
    }
  }
`;

const Left = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 188.89px;
  height: 100%;
  padding: 0 20px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 188.89px;
  }

  .blank {
    padding-right: 70px;
  }
`;

const Categories = styled.div`
  ${(props) => props.theme.flexCenter};
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  div {
    ${(props) => props.theme.flexCenter};
    height: 100%;

    ul {
      min-width: 2250px;
      ${(props) => props.theme.flexCenter};
      justify-content: space-between;
    }
  }
`;

const Right = styled.div`
  ${({ theme }) => theme.flexCenter};
  height: 100%;
  width: 90.83px;
  position: relative;

  .gradient {
    position: absolute;
    top: 0;
    bottom: 1px;
    right: 62px;
    width: 100px;
    pointer-events: none;
    content: "";
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
  }
`;
