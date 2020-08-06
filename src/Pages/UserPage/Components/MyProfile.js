import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const MyProfile = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [tags, setTags] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("/Data/userData.json")
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
      });
  }, []);

  const isTagVisible = () => {
    setIsHidden(!isHidden);
  };

  const addTag = (value) => {
    setTags([...tags, value]);
    setUserInput("");
  };

  const deleteTag = (id) => {
    let newTag = [...tags];
    newTag.splice(id, 1);
    setTags(newTag);
  };

  const handleText = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.keyCode === 13 && addTag(userInput);
  };

  return (
    <ProfileContainer>
      <div className="flex">
        <ProfilePic>
          <img alt="userProfile" src={userData.profile_image} />
        </ProfilePic>
        <ProfileInfo>
          <Upper>
            <p className="userName">
              {userData.first_name} {userData.last_name}{" "}
            </p>
            <button className="editBtn" onClick={isTagVisible}>
              Edit Tag
            </button>
          </Upper>
          <p className="subInfo">
            Download free, beautiful high-quality photos curated by{" "}
            {userData.first_name}.
          </p>
          <TagBox unVisibility={isHidden}>
            <TagContents>
              <Flex>
                <p className="tagList">TagList</p>
                <p className="max">(Maximum 5)</p>
              </Flex>
              {tags.map((el, index) => {
                return (
                  <p className="tag">
                    {el}
                    <span id={index} onClick={(e) => deleteTag(e.target.id)}>
                      x
                    </span>
                  </p>
                );
              })}
            </TagContents>
            <input
              type="text"
              value={userInput}
              placeholder="add a tag"
              onChange={handleText}
              onKeyUp={handleKeyPress}
            ></input>
            <p className="sub">
              Your Interests are generated from the types of photos you like,
              colloect, and contribute.
            </p>
          </TagBox>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  );
};

export default MyProfile;

const ProfileContainer = styled.div`
  height: 282px;
  max-width: 750px;
  padding: 60px 12px 72px;
  margin: 0 auto;

  .flex {
    display: flex;
  }
`;

const ProfilePic = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const ProfileInfo = styled.div`
  width: 100vw;
  padding-top: 15px;
  margin-left: 55px;
  .subInfo {
    color: #767676;
    font-size: 17px;
  }
`;

const Upper = styled.div`
  display: flex;
  margin-bottom: 20px;
  .userName {
    font-size: 40px;
  }
  .editBtn {
    width: 95.65px;
    height: 32px;
    color: #767676;
    font-size: 14px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    background-color: white;
    margin-left: 20px;
    margin-top: 3px;
  }
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .title {
    padding-bottom: 10px;
  }
  .sub {
    font-size: 13px;
    color: #767676;
    padding-top: 10px;
  }
  input {
    height: 40px;
    margin-top: 4px;
    padding: 10px;
  }
  visibility: ${(props) => (props.unVisibility ? "hidden" : "visible")};
`;

const TagContents = styled.div`
  display: flex;
  align-items: center;

  .max {
    font-size: 13px;
    color: #767676;
    padding-left: 5px;
  }

  .tag {
    height: 26px;
    background-color: #f1f1f1;
    padding: 5px 5px 5px 7px;
    margin-right: 5px;
    span {
      color: grey;
      padding-left: 3px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
`;
