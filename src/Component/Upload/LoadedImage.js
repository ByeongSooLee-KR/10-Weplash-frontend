import React, { useState } from "react";
import styled from "styled-components";
import { locationBtnSvg, deleteBtnSvg } from "../../icons";

const LoadedImage = ({
  inputImage,
  setInputImage,
  inputLocation,
  setInputLocation,
  setUploadActivate,
}) => {
  const [isInputActive, setInputActive] = useState(false);
  const [closeBtnActive, setCloseBtnActive] = useState(false);

  return (
    <Container>
      <div
        className="imageWrap"
        onMouseEnter={() => setCloseBtnActive(true)}
        onMouseLeave={() => setCloseBtnActive(false)}
      >
        <img src={window.URL.createObjectURL(inputImage)} alt="your upload" />
        <BtnWrap>
          {closeBtnActive && (
            <DeleteBtn
              onClick={() => {
                setInputImage(null);
                setInputLocation("Add location");
                setUploadActivate(false);
              }}
            >
              <div>{deleteBtnSvg}</div>
            </DeleteBtn>
          )}
          {!isInputActive && (
            <AddLocation onClick={() => setInputActive(true)}>
              {locationBtnSvg}
              <span>{inputLocation}</span>
            </AddLocation>
          )}
          {isInputActive && (
            <LocationInput>
              <div className="iconWrap">{locationBtnSvg}</div>
              <div className="inputWrap">
                <input
                  type="text"
                  className="location"
                  placeholder="Add a place or a city"
                  onBlur={() => setInputActive(false)}
                  onChange={(e) => setInputLocation(e.target.value)}
                />
              </div>
            </LocationInput>
          )}
        </BtnWrap>
      </div>
    </Container>
  );
};

export default LoadedImage;

const Container = styled.div`
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d1d1d1;

  .imageWrap {
    position: relative;
    width: 33%;
    padding: 12px;

    img {
      width: 100%;
    }
  }
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  z-index: 20;
  display: flex;
  flex-direction: column;
`;

const DeleteBtn = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  margin-left: auto;
  padding: 4px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  svg {
    fill: #fff;
  }
`;

const AddLocation = styled.button`
  ${(props) => props.theme.btnCustom};
  width: 125px;
  height: 32px;
  padding: 8px 12px 8px 8px;
  margin-top: auto;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 8);
  color: #fff;
  border-radius: 20px;
  transition: background-color 0.1s;
  line-height: 1;

  svg {
    fill: #fff;
    width: 16px;
    height: 16px;
  }

  span {
    padding-left: 8px;
    font-size: 14px;
  }
`;

const LocationInput = styled.div`
  width: 100%;
  height: 40px;
  margin-top: auto;
  display: flex;
  border-radius: 4px;
  background-color: #fff;

  .iconWrap {
    display: flex;
    align-items: center;
    padding-left: 10px;

    svg {
      fill: #d1d1d1;
      width: 16px;
      height: 16px;
    }
  }

  .inputWrap {
    padding-left: 10px;

    input {
      width: 100%;
      height: 40px;
      outline: none;
      border: none;
    }
  }
`;
