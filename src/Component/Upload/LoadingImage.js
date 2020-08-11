import React from "react";
import styled from "styled-components";

const LoadingImage = ({ handleImageInput }) => {
  return (
    <Container>
      <label>
        <div className="picture">
          <img
            src="https://unsplash.com/a/img/uploader/dropbox-empty-illustration/1x.png"
            alt="select"
          />
          <div>
            <span>Drop your images here or </span>
            <span>Browse</span>
          </div>
        </div>
        <div className="letter">
          <ul>
            <li>High quality photos (at least 5MP)</li>
            <li>Photos are clear & original</li>
          </ul>
          <ul>
            <li>Only upload photos you own the rights to</li>
            <li>Zero tolerance for nudity, violence or hate</li>
          </ul>
          <ul>
            <li>Respect the intellectual property of others</li>
            <li>Read the Unsplash Terms</li>
          </ul>
        </div>
        <input type="file" className="click" onChange={handleImageInput} />
      </label>
    </Container>
  );
};

export default LoadingImage;

const Container = styled.div`
  height: 100%;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  flex-grow: 1;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    padding: 24px 16px;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px dashed #d1d1d1;
    border-radius: 2px;
    color: #767676;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }

    .picture {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: auto;

      img {
        width: 150px;
        height: 93px;
        margin-bottom: 16px;
      }
    }

    .letter {
      max-width: 920px;
      display: flex;
      justify-content: space-between;
      align-self: center;
      margin-top: auto;

      ul {
        margin: 8px 16px;
        padding-left: 8px;

        li {
          font-size: 13px;
          list-style-type: disc !important;
        }
      }
    }

    input {
      display: none;
    }
  }
`;
