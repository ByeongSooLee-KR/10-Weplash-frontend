import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DownloadIcon = () => {
  return (
    <Container>
      <div className="wrap">
        <Link>
          <span>Download</span>
        </Link>
        <DropDown>
          <button>
            <svg
              width="32"
              height="32"
              className="fpkc9"
              version="1.1"
              viewBox="0 0 32 32"
              aria-hidden="false"
            >
              <path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z"></path>
            </svg>
          </button>
        </DropDown>
      </div>
    </Container>
  );
};

export default DownloadIcon;

// Styled Components

const Container = styled.div`
  padding: 4px;

  .wrap {
    display: flex;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
  }

  a {
    ${(props) => props.theme.flexCenter};
    width: 89.67px;
    height: 32px;
    padding: 0 11px;
    &:hover {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 1px solid #111;
    }

    span {
      color: #767676;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        color: #111;
      }
    }
  }
`;

const DropDown = styled.div`
  button {
    ${(props) => props.theme.btnCustom};
    width: 34px;
    height: 32px;
    fill: #767676;
    border-left: 1px solid #d1d1d1;
    &:hover {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid #111;
      fill: #111;
    }
  }

  svg {
    width: 32px;
    height: 24px;
  }
`;
