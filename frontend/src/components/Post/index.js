import React from "react";
import "./index.css";
import { fetchAgreeData } from "../../store/agree";
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
  console.log("+++++++++++++++++++", agreeCount);

  let disagreeCount = interactionDisagree.length;
  console.log("--------------------", disagreeCount);

  return (
    <div className="postContainer">
      <h1>{text}</h1>
      <>
        {agreeCount && <Agree count={agreeCount} />}
        {disagreeCount && <Disagree count={disagreeCount} />}
      </>
    </div>
  );
}

export default Post;
