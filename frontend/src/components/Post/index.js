import React, { useEffect, useState } from "react";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";

import Agree from "../Agree";
import Disagree from "../Disagree";
import UserInfo from "../UserInfo";
import Comment from "../Comment";
import CreateComment from "../CreateComment";

import { fetchCommentsData } from "../../store/comment";

function Post({ post }) {
  const dispatch = useDispatch();
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

  const comments = useSelector((reduxState) => {
    return reduxState.comments[id];
  });

  useEffect(() => {
    dispatch(fetchCommentsData(id));
  }, []);

  // useEffect(() => {
  //   dispatch(fetchCommentsData(id));
  // }, []);

  let interactionAgree = PostInteractions.filter((temp) => {
    return temp.agree === true;
  });
  let interactionDisagree = PostInteractions.filter((temp) => {
    return temp.agree === false;
  });
  let agreeCount = interactionAgree.length;
  let disagreeCount = interactionDisagree.length;

  const date = new Date(dueDate);

  if (agreeableStatus || disagreeableStatus) {
    let cancelInteractions = PostInteractions.find(
      (eachInteraction) => eachInteraction.userId === loggedInUserId
    );
    if (cancelInteractions) {
      setAgreeableStatus(false);
      setDisagreeableStatus(false);
    }
  }

  return (
    <>
      <div className="postContainer">
        <div id="post-container-no-comments">
          <UserInfo profPhoto={profPhoto} username={username} userId={userId} />
          <h1>{text}</h1>
          <div className="postInteraction">
            <h3>By: {date.toDateString()}</h3>
            <div id="agrees">
              { (
                <Agree
                  agreeCount={agreeCount}
                  disagreeCount={disagreeCount}
                  postId={id}
                  agreeableStatus={agreeableStatus}
                  PostInteractions={PostInteractions}
                  loggedInUserId={loggedInUserId}
                  postUserId={postUserId}
                  oldAgreeableStatus={agreeableStatus}
                  oldDisagreeableStatus={disagreeableStatus}
                />
              )}
            </div>
          </div>
        </div>
        <div id="comments">
          {Comments &&
            comments &&
            comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
          <CreateComment userId={loggedInUserId} postId={id} />
        </div>
      </div>
    </>
  );
}

export default Post;
