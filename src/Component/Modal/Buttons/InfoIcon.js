import React from "react";
import styled from "styled-components";

const InfoIcon = () => {
  return (
    <Container>
      <button>
        <div className="wrap">
          <svg
            width="32"
            height="32"
            className="_1rYbs"
            version="1.1"
            viewBox="0 0 32 32"
            aria-hidden="false"
          >
            <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm2 25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12zm0-16c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z"></path>
          </svg>
          <span>Info</span>
        </div>
      </button>
    </Container>
  );
};

export default InfoIcon;

// Styled Components

const Container = styled.div`
  padding: 4px;

  button {
    ${(props) => props.theme.btnCustom};
    border: 1px solid #d1d1d1;
    width: 79.2px;
    height: 32px;
    fill: #767676;
    padding: 0 11px;
    border-radius: 4px;
    &:hover {
    }

    .wrap {
      height: 100%;
      display: flex;
      align-items: center;

      span {
        color: #767676;
        font-size: 14px;
        font-weight: 500;
        margin-left: 6px;
        &:hover {
          color: #111;
        }
      }
    }
    &:hover {
      border: 1px solid #111;
      fill: #111;
      color: #111;
    }
  }

  svg {
    height: 14px;
    width: 14px;
  }
`;
