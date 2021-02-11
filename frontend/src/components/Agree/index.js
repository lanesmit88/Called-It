import "./index.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateAgree } from "../../store/agree";
import { fetchCreateDisagree } from "../../store/disagree";


function Agree({
  agreeCount,
  disagreeCount,
  postId,
  PostInteractions,
  loggedInUserId,
  postUserId,
  oldAgreeableStatus,
  oldDisagreeableStatus,
}) {
  const [agree, setAgree] = useState(true);
  const [agreeableStatus, setAgreeableStatus] = useState(oldAgreeableStatus);
  const [disagreeableStatus, setDisagreeableStatus] = useState(
    oldDisagreeableStatus
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (postUserId === loggedInUserId) {
      setAgreeableStatus(false);
      return;
    }
    let userInteraction = PostInteractions.find(
      (interaction) => loggedInUserId === interaction.userId
    );
    if (userInteraction) {
      if (userInteraction.agree) {
        setAgreeableStatus(false);
      }
    }
  }, [PostInteractions]);

  useEffect(() => {
    if (postUserId === loggedInUserId) {
      setDisagreeableStatus(false);
      return;
    }
    let userInteraction = PostInteractions.find(
      (interaction) => loggedInUserId === interaction.userId
    );
    if (userInteraction) {
      if (userInteraction.agree === false) {
        setDisagreeableStatus(false);
      }
    }
  }, [PostInteractions]);

  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  function submitAgree(e) {
    e.preventDefault();
    setAgreeableStatus(false);
    setDisagreeableStatus(false);
    dispatch(fetchCreateAgree({ agree, userId, postId }));
  }
  function submitDisagree(e) {
    e.preventDefault();
    setDisagreeableStatus(false);
    setAgreeableStatus(false);
    dispatch(fetchCreateDisagree({ agree, userId, postId }));
  }

  return (
    <>
      <div id="agree-button-and-count">
        {agreeableStatus ? (
          <form onSubmit={submitAgree}>
            <button
              className="fas fa-thumbs-up"
              id="agreeable-button"
              value={agree}
              onChange={(e) => {
                setAgree(e.target.value);
              }}
              type="submit"
            ></button>
            {/* <button type="submit">Post</button> */}
          </form>
        ) : (
          <button
            className="fas fa-thumbs-up"
            id="not-agreeable-button"
          ></button>
        )}
        <h3 id="postAgrees">{agreeCount}</h3>
      </div>
      <div id="disagree-button-and-count">
        {disagreeableStatus ? (
          <form onSubmit={submitDisagree}>
            <button
              className="fas fa-thumbs-down"
              id="disagreeable-button"
              value={agree}
              onClick={(e) => {
                setAgree(e.target.value);
              }}
              type="submit"
            ></button>
            {/* <button type="submit">Post</button> */}
          </form>
        ) : (
          <button
            className="fas fa-thumbs-down"
            id="not-disagreeable-button"
          ></button>
        )}

        <h3 id="postAgrees">{disagreeCount}</h3>
      </div>
    </>
  );
}
export default Agree;
