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
        <>
          {
            <form onSubmit={submitUnfollow} id="follow-form">
              Unfollow
              <button
                className="fas fa-user-minus"
                id="follow-button"
                value={follow}
                onChange={(e) => {
                  setFollow(e.target.value);
                }}
                type="submit"
              ></button>
            </form>
          }
        </>
      ) : (
        <>
          {
            <form onSubmit={submitFollow} id="follow-form">
              {" "}
              Follow
              <button
                className="fas fa-user-plus"
                id="follow-button"
                value={follow}
                onChange={(e) => {
                  setFollow(e.target.value);
                }}
                type="submit"
              ></button>
            </form>
          }
        </>
      )}
    </>
  );
}

export default Follow;
