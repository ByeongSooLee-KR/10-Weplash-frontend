import React, { useEffect, useState } from "react";
import { TopicCardsAPI } from "../../config";
import AddCollection from "./AddCollection";
import CreateModal from "./CreateModal";
import styled from "styled-components";
import Dimmer from "../Dimmer";

const CollectionModal = ({ data, setCollectionModalActive }) => {
  const [collections, setCollections] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [privateStatus, setPrivateStatus] = useState(false);

  useEffect(() => {
    fetch(`${TopicCardsAPI}/${data.id}`, {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCollections(res.data);
      });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createCollection = () => {
    fetch(`${TopicCardsAPI}/create`, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        photo_id: data.id,
        name: name,
        description: desc,
        private: privateStatus,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCollections(res.data);
        setCreateModal(false);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  return (
    <CollectionModalFrame>
      <div className="collectionModal">
        <CollectionTitleImage>
          <img alt="TitleImage" src={`${data.image}`} />
        </CollectionTitleImage>
        {createModal ? (
          <CreateModal
            createModal={createModal}
            setCreateModal={setCreateModal}
            createCollection={createCollection}
            handleChangeName={handleChangeName}
            handleChangeDesc={handleChangeDesc}
            name={name}
            desc={desc}
            privateStatus={privateStatus}
            setPrivateStatus={setPrivateStatus}
          />
        ) : (
          <AddCollection
            setCreateModal={setCreateModal}
            createModal={createModal}
            data={data}
            collections={collections}
            setCollections={setCollections}
          />
        )}
      </div>
      <Dimmer setCollectionModalActive={setCollectionModalActive} />
    </CollectionModalFrame>
  );
};
export default CollectionModal;

const CollectionModalFrame = styled.div`
  .collectionModal {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 560px;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    background-color: white;
    z-index: 17;
    outline: none;
    cursor: default;
  }
`;

const CollectionTitleImage = styled.div`
  position: fixed;
  width: 333px;
  height: 560px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow: hidden;
  z-index: 7;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
`;
