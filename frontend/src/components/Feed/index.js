import React from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";

import { useEffect } from "react";
import "./index.css";

function Feed() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  const feed = useSelector((reduxState) => {
    return reduxState.feed.reverse();
  });

  useEffect(() => {
    dispatch(fetchFeedData(userId));
  }, []);

  return (
    <div id="feedContainer">
      <div id="feed-inner-container">
        {feed.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
