import "./index.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchCreateFollow } from "../../store/follow";

function Follow({ followStatus, followerId, followedId }) {
  const dispatch = useDispatch();
  const [follow, setFollow] = useState(true);

  function submitForm(e) {
    e.preventDefault();
    dispatch(fetchCreateFollow({ followerId, followedId }));
  }

  return (
    <>
      {followStatus ? (
        <button>unfollow</button>
      ) : (
        <div id="agree-button-and-count">
          {
            <form onSubmit={submitForm}>
              <button
                id="follow-button"
                value={follow}
                onChange={(e) => {
                  setFollow(e.target.value);
                }}
                type="submit"
              >
                follow
              </button>
            </form>
          }
        </div>
      )}
    </>
  );
}

export default Follow;
