import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  iconPhoto,
  iconLike,
  iconCollection,
  TopicCardsAPI,
  colors,
} from "../../config";
import { GoTriangleDown } from "react-icons/go";
import Card from "../Card/Card";
import Loading from "../Loading";
import SearchText from "../Search/SearchText";

const FilterNav = () => {
  const [cards, setCards] = useState([]);
  const [stateFilterSize, setStateFilterSize] = useState(false);
  const [stateFilterColor, setStateFilterColor] = useState(false);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sizeInfo, setSizeInfo] = useState("Any orientation");
  const [sizeData, setSizeData] = useState([]);

  const LIMIT = 20;

  const clickFilter = (which) => {
    which === "size"
      ? setStateFilterSize(!stateFilterSize)
      : setStateFilterColor(!stateFilterColor);
  };

  const clickSizeInfo = (which) => {
    setSizeInfo(which);
    setSizeData(
      cards.filter(({ width, height }) => {
        if (which === "Landscape") {
          return height < width;
        }
        if (which === "portrait") {
          return height > width;
        }
        if (which === "square") {
          return height === width;
        }
      })
    );
  };

  useEffect(() => {
    fetch(
      `${TopicCardsAPI}?category=${"Travel"}&offset=${offset}&limit=${LIMIT}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCards(res.data);
      });
  }, []);

  return (
    <>
      <IconAndFilterBar>
        <Icons>
          <StyledLink>
            <svg viewBox="0 0 32 32">
              <path d={iconPhoto}></path>
            </svg>
            Photos
          </StyledLink>
          <StyledLink>
            <svg viewBox="0 0 32 32">
              <path d={iconLike}></path>
            </svg>
            Likes
          </StyledLink>
          <StyledLink>
            <svg viewBox="0 0 32 32">
              <path d={iconCollection}></path>
            </svg>
            Collections
          </StyledLink>
        </Icons>
        <Filters>
          <Flex>
            <div
              tabindex="1"
              onFocus={() => clickFilter("size")}
              onBlur={() => clickFilter("size")}
              className="filterBox size"
              name="size"
            >
              <Filter>
                <span>{sizeInfo}</span>
                <GoTriangleDown />
              </Filter>
              <FilterSizeResult visibility={stateFilterSize}>
                <li>Any orientation</li>
                <li onClick={() => clickSizeInfo("Landscape")}>
                  <DivBox className="landscape" />
                  <p>Landscape</p>
                </li>
                <li onClick={() => clickSizeInfo("portrait")}>
                  <DivBox className="portrait" />
                  <p>Portrait</p>
                </li>
                <li onClick={() => clickSizeInfo("square")}>
                  <DivBox className="square" />
                  <p>Square</p>
                </li>
              </FilterSizeResult>
            </div>
            <div
              tabindex="1"
              onFocus={() => clickFilter("color")}
              onBlur={() => clickFilter("color")}
              className="filterBox color"
              name="color"
            >
              <Filter name="color" onClick={clickFilter} onBlur={clickFilter}>
                <span>Any color</span>
                <GoTriangleDown />
              </Filter>
              <FilterColorResult visibility={stateFilterColor}>
                <li>Any color</li>
                <li>Black and white</li>
                <li>
                  Tones
                  <div className="colorBox">
                    {colors.map((color) => {
                      return (
                        <div
                          className={`colorDiv ${color}`}
                          style={{ backgroundColor: color }}
                        />
                      );
                    })}
                  </div>
                </li>
              </FilterColorResult>
            </div>
            <Filter className="relevance">
              <span>Sort by Relevance</span>
              <GoTriangleDown />
            </Filter>
          </Flex>
        </Filters>
      </IconAndFilterBar>
      <SearchResultWrap>
        <SearchText />
        <CardListFrame>
          {loading && <Loading load={loading} />}
          {sizeData.length
            ? sizeData.map((card, id) => {
                return <Card key={id} id={id} card={card} />;
              })
            : cards.map((card, id) => {
                return <Card key={id} id={id} card={card} />;
              })}
        </CardListFrame>
      </SearchResultWrap>
    </>
  );
};

export default FilterNav;

const IconAndFilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #d1d1d1;
  overflow: visible;
`;

const Icons = styled(IconAndFilterBar)`
  border: none;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.grayColor};
  margin-left: 32px;
  display: flex;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    fill: #d1d1d1;
  }
  &:hover,
  &:focus {
    color: black;
    svg {
      fill: black;
    }
  }
`;

const Filters = styled(IconAndFilterBar)`
  width: 400px;
  height: 56px;
  border: none;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-right: 20px;

  .relevance {
    width: 150px;
    height: 15px;
  }
`;

const Filter = styled.div`
  color: ${(props) => props.theme.colors.grayColor};
  background-color: white;
  border: none;
  display: flex;
  font-size: 15px;
  cursor: pointer;
  svg {
    margin-left: 8px;
    color: #d1d1d1;
  }
  &:focus {
    outline: none;
  }
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 20px;

  .filterBox {
    &:focus {
      outline: none;
    }
  }

  .size {
    width: 140px;
  }
  .color {
    width: 110px;
  }
`;

const FilterSizeResult = styled.div`
  width: 175px;
  height: 140px;
  color: #767676;
  border: 1px solid #d1d1d1;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  margin-top: 20px;

  li {
    font-size: 14px;
    list-style: none;
    padding: 8px 16px;
    display: flex;

    &:hover {
      color: black;
      background-color: #d1d1d1;
    }
  }
`;

const FilterColorResult = styled.div`
  width: 175px;
  height: 160px;
  color: #767676;
  border: 1px solid #d1d1d1;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  padding: 8px 0;
  margin-top: 20px;

  li {
    font-size: 14px;
    list-style: none;
    padding: 8px 16px;

    &:hover {
      color: black;
      background-color: #d1d1d1;
    }
    .colorBox {
      width: 126px;
      height: 48px;
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 24px);
      grid-auto-rows: 24px;
      margin-top: 10px;

      .colorDiv {
        width: 16px;
        height: 16px;
        padding: 4px;
        border-radius: 50%;
      }
    }
  }
`;

const DivBox = styled.div`
  width: 18px;
  height: ${(props) => (props.className === "square" ? "18px" : "12px")};
  transform: ${(props) =>
    props.className === "portrait" ? "rotate(90deg)" : ""};
  background: rgb(228, 228, 228);
  border: 1px solid rgb(177, 177, 177);
  margin: 0px 10px 0px 0px;
`;

const SearchResultWrap = styled.div`
  width: 1320px;
  height: 100vh;
  margin: 0 auto;
`;

const CardListFrame = styled.div`
  column-width: 416px;
  column-gap: 5px;
`;
