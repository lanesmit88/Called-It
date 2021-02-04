import React from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { fetchAgreeData } from "../../store/agree";
import { fetchUsersData } from "../../store/users";
import { useEffect } from "react";
import "./index.css";

function Feed() {
  const dispatch = useDispatch();
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  const feed = useSelector((reduxState) => {
    return reduxState.feed;
  });

  // const users = useSelector((reduxState) => {
  //   return reduxState;
  // });

  useEffect(() => {
    dispatch(fetchFeedData(userId));
  }, []);

  useEffect(() => {
    dispatch(fetchAgreeData());
  }, []);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  if (!feed) {
    return null;
  }

  return (
    <div id="feedContainer">
      {feed &&
        feed.map((post) => {
          return (
            <Post
              key={post.id}
              postId={post.id}
              text={post.text}
              dueDate={post.dueDate}
              userId={post.userId}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
          );
        })}
    </div>
  );
}

export default Feed;
