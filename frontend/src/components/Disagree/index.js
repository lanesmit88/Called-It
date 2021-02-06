import "./index.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateDisagree } from "../../store/disagree";

function Disagree({ count, postId, disagreeableStatus }) {
  const [agree, setAgree] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });
  function submitForm(e) {
    e.preventDefault()
    dispatch(fetchCreateDisagree({ agree, userId, postId }));
  }
  return (
    <div id="disagree-button-and-count">
      {disagreeableStatus && (
        <form onSubmit={submitForm}>

          <button
            className="far fa-thumbs-down"
            value={agree}
            onClick={(e) => {
              setAgree(e.target.value);
            }}
            type="submit"
          >
          </button>
          {/* <button type="submit">Post</button> */}
        </form>
      )}

      <h3 id="postAgrees">{count}</h3>
    </div>
  );
}
export default Disagree;
