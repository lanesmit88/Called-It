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
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(true);
  const [disagree, setDisagree] = useState(false);
  const [agreeCounter, setAgreeCounter] = useState(agreeCount);
  const [disagreeCounter, setDisagreeCounter] = useState(disagreeCount);
  const [agreeableStatus, setAgreeableStatus] = useState(oldAgreeableStatus);
  const [disagreeableStatus, setDisagreeableStatus] = useState(
    oldDisagreeableStatus
  );

  useEffect(() => {
    if (agreeableStatus || disagreeableStatus) {
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
        } else if (userInteraction.agree === false) {
          setDisagreeableStatus(false);
        }
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
    setAgreeCounter((agreeCount += 1));
    dispatch(fetchCreateAgree({ agree, userId, postId }));
  }

  function submitDisagree(e) {
    e.preventDefault();
    setDisagreeableStatus(false);
    setAgreeableStatus(false);
    setDisagreeCounter((disagreeCount += 1));
    dispatch(fetchCreateDisagree({ agree, userId, postId }));
  }

  return (
    <>
      <div id="agree-button-and-count">
        {agreeableStatus ? (
          <form onSubmit={submitAgree}>
            <button
              className="far fa-thumbs-up"
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
        <h3 id="postAgrees">{agreeCounter}</h3>
      </div>
      <div id="disagree-button-and-count">
        {disagreeableStatus ? (
          <form onSubmit={submitDisagree}>
            <button
              className="far fa-thumbs-down"
              id="disagreeable-button"
              value={disagree}
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

        <h3 id="postDisagrees">{disagreeCounter}</h3>
      </div>
    </>
  );
}
export default Agree;
