import React from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { useEffect } from "react";
import "./index.css"

function Feed() {
  const dispatch = useDispatch();
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });
  const feedData = useSelector((reduxState) => {
    return reduxState.feed;
  });

  useEffect(() => {
    dispatch(fetchFeedData(1));
  }, []);

  if (!feedData) {
    return null;
  }
  return (
    <div id="feedContainer">
      {feedData &&
        feedData.map((post) => {
          return (
            <Post
              key={post.id}
              text={post.text}
              createdAt={post.createdAt}
              id={post.id}
              updatedAt={post.updatedAt}
              userId={post.userId}
            />
          );
        })}
    </div>
  );
}

export default Feed;
