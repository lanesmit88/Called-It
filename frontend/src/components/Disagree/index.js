import "./index.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateDisagree } from "../../store/disagree";

function Disagree({
  count,
  postId,
  PostInteractions,
  loggedInUserId,
  postUserId,
  oldDisagreeableStatus
}) {
  const [agree, setAgree] = useState(false);
  const [disagreeableStatus, setDisagreeableStatus] = useState(oldDisagreeableStatus);
  const dispatch = useDispatch();

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

  function submitForm(e) {
    e.preventDefault();
    setDisagreeableStatus(false);
    dispatch(fetchCreateDisagree({ agree, userId, postId }));
  }

  return (
    <div id="disagree-button-and-count">
      {disagreeableStatus ? (
        <form onSubmit={submitForm}>
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

      <h3 id="postAgrees">{count}</h3>
    </div>
  );
}

export default Disagree;
