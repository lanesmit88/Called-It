import "./index.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateAgree } from "../../store/agree";

function Agree({ count }) {
  const [agree, setAgree] = useState(null);
  const dispatch = useDispatch();

  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });
  function submitForm() {
    dispatch(fetchCreateAgree({ agree, userId }));
  }
  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <button
            placeholder="Due Date"
            value={agree}
            onChange={(e) => {
              setAgree(e.target.value);
            }}
            type="submit"
          >
            Agree
          </button>
          {/* <button type="submit">Post</button> */}
        </form>
      </div>
      <h3 id="postAgrees">{count}</h3>
    </>
  );
}
export default Agree;
