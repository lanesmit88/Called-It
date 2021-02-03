import React from "react";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";

import Agree from "../Agree";
import Disagree from "../Disagree";

function Post({ text, postId }) {
  const agrees = useSelector((reduxState) => {
    return reduxState.agree;
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

  return (
    <div className="postContainer">
      <h1>{text}</h1>
      <div className="postInteraction">
        {agreeCount && <Agree count={agreeCount} />}
        {disagreeCount && <Disagree count={disagreeCount} />}
      </div>
    </div>
  );
}

export default Post;
