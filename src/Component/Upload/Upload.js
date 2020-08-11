import React from "react";
import Dimmer from "../../Component/Modal/Dimmer";
import UploadModal from "../../Component/Upload/UploadModal";

const Upload = ({ setSubmitModalState }) => {
  return (
    <>
      <Dimmer setSubmitModalState={setSubmitModalState} />
      <UploadModal setSubmitModalState={setSubmitModalState} />
    </>
  );
};

export default Upload;
