import React from "react";
import styled from "styled-components";

const UploadFooter = ({
  inputImage,
  uploadActivate,
  setSubmitModalState,
  handleUpload,
}) => {
  return (
    <Container uploadActivate={uploadActivate}>
      <div className="license">Read the Wesplash License</div>
      <div>
        <button
          className="cancelBtn"
          onClick={
            inputImage
              ? () => {
                  // eslint-disable-next-line no-restricted-globals
                  if (confirm("이미지 업로드를 중단하시겠습니까?")) {
                    setSubmitModalState(false);
                  }
                }
              : () => setSubmitModalState(false)
          }
        >
          Cancel
        </button>
        <button
          className="publishBtn"
          onClick={
            uploadActivate
              ? (e) => handleUpload(e)
              : () => alert("이미지와 장소를 모두 입력해주세요")
          }
        >
          Publish to Wesplash
        </button>
      </div>
    </Container>
  );
};

export default UploadFooter;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  .license {
    font-size: 12px;
    color: #767676;
  }

  .cancelBtn {
    ${(props) => props.theme.btnCustom};
    color: #767676;
    fill: currentColor;
    background-color: #fff;
    border-color: #d1d1d1;
    height: 32px;
    padding: 0 11px;
    margin-right: 8px;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;

    &:hover {
      color: #111;
      border: 1px solid #111;
    }
  }

  .publishBtn {
    cursor: ${(props) => (props.uploadActivate ? "pointer" : "not-allowed")};
    color: ${(props) => (props.uploadActivate ? "#fff" : "#767676")};
    background-color: ${(props) => (props.uploadActivate ? "#111" : "#eee;")};
    height: 32px;
    padding: 0 11px;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: none;
  }
`;
