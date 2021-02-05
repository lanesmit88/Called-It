import React from "react";
import "./index.css";

import { useSelector } from "react-redux";

import Agree from "../Agree";
import Disagree from "../Disagree";
import UserInfo from "../UserInfo";

function Post({ post }) {
  const {
    text,
    userId,
    dueDate,
    id,
    User: { profilePhotoUrl: profPhoto, username },
    PostInteractions: [{ userId: agreedUserId, postId, agree: agreeStatus }]
  } = post;


  const loggedInUserId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  console.log(agreeStatus);

  // let interactionAgree = PostInteractions.filter((temp) => {
  //   return temp.agree === true;
  // });
  // let interactionDisagree = PostInteractions.filter((temp) => {
  //   return temp.agree === false;
  // });
  // let agreeCount = interactionAgree.length;
  // let disagreeCount = interactionDisagree.length;

  const date = new Date(dueDate);

  return (
    <div className="postContainer">
      <UserInfo profPhoto={profPhoto} username={username} userId={userId} />
      <h1>{text}</h1>
      <div className="postInteraction">
        <h3>By: {date.toDateString()}</h3>
        <div id="agrees">
          {/* {agreeCount ? <Agree count={agreeCount} postId={id} /> : <h3>0</h3>}
          {disagreeCount ? <Disagree count={disagreeCount} /> : <h3>0</h3>} */}
        </div>
      </div>
    </div>
  );
}

export default Post;
