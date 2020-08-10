import React from "react";
import styled from "styled-components";

const ShareIcon = () => {
  return (
    <Container>
      <button>
        <div className="wrap">
          <svg
            width="32"
            height="32"
            className="_1xhtJ"
            version="1.1"
            viewBox="0 0 32 32"
            aria-hidden="false"
          >
            <path d="M0 26c0 1.7.2 3.3.6 4.9.2.9.7.9 1 0 2.1-5.3 5.5-10.3 11.1-11.3h3.3v4.4c0 2 1.2 2.6 2.6 1.4l12.8-11c.7-.6.7-1.6 0-2.3l-12.8-11c-1.4-1.3-2.6-.6-2.6 1.3v4.7c-9.6 1.6-16 9.4-16 18.9z"></path>
          </svg>
          <span>Share</span>
        </div>
      </button>
    </Container>
  );
};

export default ShareIcon;

// Styled Components

const Container = styled.div`
  padding: 4px;

  button {
    ${(props) => props.theme.btnCustom};
    border: 1px solid #d1d1d1;
    width: 90.38px;
    height: 32px;
    fill: #767676;
    padding: 0 11px;
    border-radius: 4px;
    &:hover {
      border: 1px solid #111;
      fill: #111;
      color: #111;
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
  }

  svg {
    height: 14px;
    width: 14px;
  }
`;
