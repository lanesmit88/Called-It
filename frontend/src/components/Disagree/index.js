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
  function submitForm() {
    dispatch(fetchCreateDisagree({ agree, userId, postId }));
  }
  return (
    <>
      <div>
        {disagreeableStatus && (
          <form onSubmit={submitForm}>
            <button
              placeholder="Due Date"
              value={agree}
              onChange={(e) => {
                setAgree(e.target.value);
              }}
              type="submit"
            >
              Disagree
            </button>
            {/* <button type="submit">Post</button> */}
          </form>
        )}
      </div>
      <h3 id="postAgrees">{count}</h3>
    </>
  );
}
export default Disagree;
