import "./index.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateAgree } from "../../store/agree";

function Agree({
  count,
  postId,
  PostInteractions,
  loggedInUserId,
  postUserId,
}) {
  const [agree, setAgree] = useState(true);
  const [agreeableStatus, setAgreeableStatus] = useState(true);
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

  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });


  function submitForm(e) {
    e.preventDefault();
    setAgreeableStatus(false);
    dispatch(fetchCreateAgree({ agree, userId, postId }));
  }

  return (
    <div id="agree-button-and-count">
      {agreeableStatus ? (
        <form onSubmit={submitForm}>
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
        <button className="far fa-thumbs-up" id="not-agreeable-button"></button>
      )}
      <h3 id="postAgrees">{count}</h3>
    </div>
  );
}
export default Agree;
