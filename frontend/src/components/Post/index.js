import React from "react";
import "./index.css";

import { useSelector } from "react-redux";

import Agree from "../Agree";
import Disagree from "../Disagree";
import UserInfo from "../UserInfo";

function Post({ text, postId, userId, dueDate }) {
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

  const date = new Date(dueDate);
  console.log(date);
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
        <h3>By: {date.toDateString()}</h3>
        <div id="agrees">
          {agreeCount ? <Agree count={agreeCount} /> : <h3>0</h3>}
          {disagreeCount ? <Disagree count={disagreeCount} /> : <h3>0</h3>}
        </div>
      </div>
    </div>
  );
}

export default Post;
