import React, { useEffect, useState } from "react";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";

import Agree from "../Agree";
import UserInfo from "../UserInfo";
import Comment from "../Comment";
import CreateComment from "../CreateComment";

import { fetchCommentsData } from "../../store/comment";

import { fetchDeletePost } from "../../store/userPosts";

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
  const [showComments, setShowComments] = useState(false);
  const [deletePost, setDeletePost] = useState(true);
  const [showRightWrong, setShowRightWrong] = useState(false);
  const [rightWrong, setRightWrong] = useState(false);

  const loggedInUserId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  const comments = useSelector((reduxState) => {
    return reduxState.comments[id];
  });

  useEffect(() => {
    dispatch(fetchCommentsData(id));
  }, []);

  let interactionAgree = PostInteractions.filter((temp) => {
    return temp.agree === true;
  });
  let interactionDisagree = PostInteractions.filter((temp) => {
    return temp.agree === false;
  });
  let agreeCount = interactionAgree.length;
  let disagreeCount = interactionDisagree.length;

  const date = new Date(dueDate);

  let active = date >= new Date();
  if (agreeableStatus || disagreeableStatus) {
    let cancelInteractions = PostInteractions.find(
      (eachInteraction) => eachInteraction.userId === loggedInUserId
    );
    if (cancelInteractions) {
      setAgreeableStatus(false);
      setDisagreeableStatus(false);
      return;
    }
  }

  function commentsHandeler() {
    setShowComments(!showComments);
  }
  function submitDeletePost(e) {
    e.preventDefault();
    dispatch(fetchDeletePost({ id, userId }));
  }

  function submitComplete(e) {
    e.preventDefault();
    // dispatch(fetchCreateComment({ text, userId, postId }));
    // setText("");
  }

  return (
    <>
      <div className="postContainer">
        <div id="post-container-no-comments">
          <UserInfo profPhoto={profPhoto} username={username} userId={userId} />
          <h1>{text}</h1>
          <div className="postInteraction">
            <div id="date-and-status">
              <h3 id="post-date">By: {date.toDateString()}</h3>
              {loggedInUserId === userId && (
                <form onSubmit={submitDeletePost}>
                  <button
                    id="delete-post-button"
                    className="fas fa-trash"
                    value={deletePost}
                    onChange={(e) => {
                      setDeletePost(e.target.value);
                    }}
                    type="submit"
                  ></button>
                </form>
              )}
            </div>
            <div id="agrees-active">
              {active && loggedInUserId === userId && (
                <h1 id="active-post">Active</h1>
              )}
              {!active && loggedInUserId === userId && (
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (showRightWrong) {
                        setShowRightWrong(false);
                      } else {
                        setShowRightWrong(true);
                      }
                    }}
                    id="complete-form"
                  >
                    <button id="complete-button" type="submit">
                      Complete
                    </button>
                  </form>
                </>
              )}
              {showRightWrong && (
                <>
                  <form onSubmit={submitComplete} id="complete-form">
                    Correct?
                    <input
                      type="checkbox"
                      value={rightWrong}
                      onChange={(e) => {
                        setRightWrong(e.target.value);
                      }}
                    ></input>
                    <button
                      className="fas fa-plus"
                      id="comment-button"
                      type="submit"
                    ></button>
                  </form>
                </>
              )}
              {active && loggedInUserId !== userId && (
                <h1 id="active-post">Active</h1>
              )}
              {!active && loggedInUserId !== userId && (
                <h1 id="inactive-post">complete</h1>
              )}
              <div id="agrees">
                {
                  <Agree
                    agreeCount={agreeCount}
                    disagreeCount={disagreeCount}
                    postId={id}
                    PostInteractions={PostInteractions}
                    loggedInUserId={loggedInUserId}
                    postUserId={postUserId}
                    oldAgreeableStatus={agreeableStatus}
                    oldDisagreeableStatus={disagreeableStatus}
                  />
                }

                {showComments ? (
                  <div id="show-comments">
                    <i
                      className="fas fa-comment"
                      id="comment-icon"
                      onClick={commentsHandeler}
                    ></i>
                    <h3>{Comments.length}</h3>
                  </div>
                ) : (
                  <div id="show-comments">
                    <i
                      className="far fa-comment"
                      id="comment-icon"
                      onClick={commentsHandeler}
                    ></i>
                    <h3>{Comments.length}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {showComments && (
          <div id="comments">
            {comments &&
              comments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    comment={comment}
                    loggedInUserId={loggedInUserId}
                    posterId={userId}
                  />
                );
              })}
            <CreateComment userId={loggedInUserId} postId={id} />
          </div>
        )}
      </div>
    </>
  );
}

export default Post;
