import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterIcon from "./FooterIcon";
import { userCollectionAPI } from "../../../config";
import RelatedCollections from "../../../Component/Modal/ModalContents/RelatedContents/RelatedCollections";

const Collections = (props, activeTab) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`${userCollectionAPI}user=${props.userId}`)
      .then((res) => res.json())
      .then((res) => {
        // setUserData(res.data);
      });
  }, [props.activeTab]);

  return (
    <CollectionWrap>
      <RelatedCollections />
      <FooterIcon />
    </CollectionWrap>
  );
};

export default Collections;

const CollectionWrap = styled.div`
  padding: 0 100px;
  margin-top: 40px;
`;
