import React from "react";
import styled from "styled-components";
import { lockSvg } from "../../icons";

const CreateModal = ({
  createModal,
  setCreateModal,
  createCollection,
  handleChangeName,
  handleChangeDesc,
  privateStatus,
  setPrivateStatus,
  name,
  desc,
}) => {
  return (
    <CreateModalFrame>
      <h3>Create new collection</h3>
      <Name>
        <label>Name</label>
        <input
          maxLength="60"
          onChange={handleChangeName}
          value={name}
          required
        />
      </Name>
      <Description>
        <label>Description (optional)</label>
        <textarea maxLength="250" onChange={handleChangeDesc} value={desc} />
      </Description>
      <Private>
        <input
          className="checkBox"
          type="checkbox"
          value="true"
          onClick={() => setPrivateStatus(!privateStatus)}
        />
        <span>Make collection private</span>
        <i>{lockSvg}</i>
      </Private>
      <CancelOrCreate>
        <button
          onClick={() => setCreateModal(!createModal)}
          className="cancelBtn"
        >
          Cancel
        </button>
        <button className="createBtn" onClick={createCollection}>
          Create collection
        </button>
      </CancelOrCreate>
    </CreateModalFrame>
  );
};
export default CreateModal;

const CreateModalFrame = styled.div`
  width: 567px;
  padding: 0 40px;
  z-index: 18;
  margin-left: 333px;
  animation-name: anime;
  animation-duration: 1s;

  @keyframes anime {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h3 {
    font-size: 28px;
    font-weight: bolder;
    margin: 32px 0;
  }

  label {
    display: block;
    color: #111;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const Name = styled.section`
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 24px;
    padding: 6px 12px;
    border: 1px solid black;
    border-radius: 3px;
    outline: none;
  }
`;

const Description = styled.section`
  textarea {
    width: 100%;
    height: 86px;
    margin-bottom: 24px;
    padding: 6px 12px;
    font-family: sans-serif;
    resize: none;
    border: 1px solid black;
    border-radius: 3px;
    outline: none;
  }
`;

const Private = styled.section`
  display: flex;
  align-items: flex-end;

  .checkBox {
    margin-right: 0 8px 0 0;
  }

  span {
    font-family: sans-serif;
    font-weight: 400;
  }

  i {
    width: 11px;
    height: 15px;
    margin-left: 8px;
    fill: #d1d1d1;
  }
`;

const CancelOrCreate = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;

  .cancelBtn {
    color: #111;
    font-size: 16px;
    text-decoration: underline;
    border-style: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .createBtn {
    width: 150px;
    height: 44px;
    padding: 0 16px;
    color: white;
    font-size: 15px;
    line-height: 42px;
    border-style: none;
    border-radius: 4px;
    outline: none;
    background-color: black;
    cursor: pointer;
  }
`;
