import React, { useEffect, useState } from "react";
import "./index.css";

import { useSelector } from "react-redux";

import Agree from "../Agree";
import Disagree from "../Disagree";
import UserInfo from "../UserInfo";
import Comment from "../Comment";

function Post({ post }) {
  const {
    text,
    userId,
    dueDate,
    id,
    Comments,
    PostInteractions,
    User: { profilePhotoUrl: profPhoto, username, id: postUserId },
  } = post;

  const [agreeableStatus, setAgreeableStatus] = useState(true);
  const [disagreeableStatus, setDisagreeableStatus] = useState(true);

  const loggedInUserId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  useEffect(() => {
    if (postUserId === loggedInUserId) {
      setAgreeableStatus(false);
      setDisagreeableStatus(false);
      return;
    }
    let userInteraction = PostInteractions.find(
      (interaction) => loggedInUserId === interaction.userId
    );
    if (userInteraction) {
      if (userInteraction.agree) {
        setAgreeableStatus(false);
      } else if (!userInteraction.agree) {
        setDisagreeableStatus(false);
      }
    }
  }, [PostInteractions]);

  let interactionAgree = PostInteractions.filter((temp) => {
    return temp.agree === true;
  });
  let interactionDisagree = PostInteractions.filter((temp) => {
    return temp.agree === false;
  });
  let agreeCount = interactionAgree.length;
  let disagreeCount = interactionDisagree.length;

  const date = new Date(dueDate);

  return (
    <>
      <div className="postContainer">
        <div id="post-container-no-comments">
          <UserInfo profPhoto={profPhoto} username={username} userId={userId} />
          <h1>{text}</h1>
          <div className="postInteraction">
            <h3>By: {date.toDateString()}</h3>
            <div id="agrees">
              {agreeCount ? (
                <Agree
                  count={agreeCount}
                  postId={id}
                  agreeableStatus={agreeableStatus}
                />
              ) : (
                <h3>0</h3>
              )}
              {disagreeCount ? (
                <Disagree
                  count={disagreeCount}
                  postId={id}
                  disagreeableStatus={disagreeableStatus}
                />
              ) : (
                <h3>0</h3>
              )}
            </div>
          </div>
        </div>
        <div id="comments">
          {Comments &&
            Comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Post;
