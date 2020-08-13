import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadedImage from "./LoadedImage";
import LoadingImage from "./LoadingImage";
import UploadFooter from "./UploadFooter";

const UploadModal = ({ setSubmitModalState }) => {
  const [inputImage, setInputImage] = useState(null);
  const [inputLocation, setInputLocation] = useState("Add location");
  const [uploadActivate, setUploadActivate] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageInput = (e) => {
    setInputImage(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("filename", inputImage);
    formData.append("location", inputLocation);

    fetch("http://10.58.1.191:8000/photo/upload", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: formData,
    }).then((res) => {
      res.status === 200 && setUploadSuccess(true);
      setInputImage(null);
      setInputLocation(null);
      setUploadActivate(false);
    });
  };

  useEffect(() => {
    if (inputImage && inputLocation !== "Add location") {
      setUploadActivate(true);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputLocation]);

  return (
    <Container>
      <div className="wrap">
        {uploadSuccess && (
          <Uploaded>
            <img src="/Images/upload_success.png" alt="success" />
          </Uploaded>
        )}
        {!uploadSuccess && (
          <Header>
            <div className="left">Publish to Weplash</div>
            <div className="right">
              <span>You have 10 uploads remaining this week.</span>
              <span>What's this?</span>
            </div>
          </Header>
        )}
        <Form method="post" encType="multipart/form-data">
          {!uploadSuccess && inputImage && (
            <LoadedImage
              inputImage={inputImage}
              setInputImage={setInputImage}
              inputLocation={inputLocation}
              setInputLocation={setInputLocation}
              setUploadActivate={setUploadActivate}
            />
          )}
          {!uploadSuccess && !inputImage && (
            <LoadingImage handleImageInput={handleImageInput} />
          )}
          {!uploadSuccess && (
            <UploadFooter
              inputImage={inputImage}
              uploadActivate={uploadActivate}
              setSubmitModalState={setSubmitModalState}
              handleUpload={handleUpload}
            />
          )}
        </Form>
      </div>
    </Container>
  );
};
export default UploadModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 60px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 20;

  .wrap {
    display: flex;
    flex-direction: column;
    height: 87vh;
  }
`;

const Header = styled.div`
  padding: 8px 16px 10px;
  min-height: 48px;
  display: flex;
  align-items: center;

  .left {
    font-weight: 500;
    font-size: 15px;
  }

  .right {
    color: #767676;
    font-size: 14px;
    margin-left: auto;
  }
`;

const Form = styled.div`
  height: calc(100% - 50px);
`;

const Uploaded = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
