import "./index.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchCreateFollow, fetchRemoveFollow } from "../../store/follow";

function Follow({ followStatus, followerId, followedId }) {
  const dispatch = useDispatch();
  const [follow, setFollow] = useState(true);

  function submitFollow(e) {
    e.preventDefault();
    dispatch(fetchCreateFollow({ followerId, followedId }));
    
  }
  function submitUnfollow(e) {
    e.preventDefault();
    dispatch(fetchRemoveFollow({ followerId, followedId }));
  }

  return (
    <>
      {followStatus ? (
        <div>
          {
            <form onSubmit={submitUnfollow}>
              <button
                id="follow-button"
                value={follow}
                onChange={(e) => {
                  setFollow(e.target.value);
                }}
                type="submit"
              >unfollow
              </button>
            </form>
          }
        </div>
      ) : (
        <div>
          {
            <form onSubmit={submitFollow}>
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
