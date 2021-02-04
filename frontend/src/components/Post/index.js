import React from "react";
import "./index.css";

import { useSelector } from "react-redux";

import Agree from "../Agree";
import Disagree from "../Disagree";
import UserInfo from "../UserInfo";

function Post({ text, postId, userId }) {
  const agrees = useSelector((reduxState) => {
    return reduxState.agree;
  });
  const users = useSelector((reduxState) => {
    return reduxState.users;
  });

  let interactions = agrees.filter((temp) => {
    return temp.postId === postId;
  });

  if (!interactions) {
    return null;
  }

  let interactionAgree = interactions.filter((temp) => {
    return temp.agree === true;
  });
  let interactionDisagree = interactions.filter((temp) => {
    return temp.agree === false;
  });
  let agreeCount = interactionAgree.length;
  let disagreeCount = interactionDisagree.length;

  function userFinder(val) {
    return val.id === userId;
  }
  if (!users) {
    return null;
  }
  let userInfo = users.find(userFinder);
  if (!userInfo) {
    return null;
  }
  console.log("++++++++++++++++++++++++++++++++++", userInfo);
  return (
    <div className="postContainer">
      {userInfo && (
        <UserInfo
          profPhoto={userInfo.profilePhotoUrl}
          username={userInfo.username}
        />
      )}
      <h1>{text}</h1>
      <div className="postInteraction">
        {agreeCount && <Agree count={agreeCount} />}
        {disagreeCount && <Disagree count={disagreeCount} />}
      </div>
    </div>
  );
}

export default Post;
