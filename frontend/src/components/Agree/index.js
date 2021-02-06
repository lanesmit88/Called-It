import "./index.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateAgree } from "../../store/agree";

function Agree({ count, postId, agreeableStatus }) {
  const [agree, setAgree] = useState(true);
  const dispatch = useDispatch();
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });
  function submitForm(e) {
    e.preventDefault();
    dispatch(fetchCreateAgree({ agree, userId, postId }));
  }
  return (
    <div id="agree-button-and-count">
      {agreeableStatus && (
        <form onSubmit={submitForm}>
          <button
            class="far fa-thumbs-up"
            placeholder="Due Date"
            value={agree}
            onChange={(e) => {
              setAgree(e.target.value);
            }}
            type="submit"
          ></button>
          {/* <button type="submit">Post</button> */}
        </form>
      )}
      <h3 id="postAgrees">{count}</h3>
    </div>
  );
}
export default Agree;
