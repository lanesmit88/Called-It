import React, { Component, useState } from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Feed() {

  const dispatch = useDispatch();
  const [post, setPost] = useState(1);
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  const feed = useSelector((reduxState) => {
    return reduxState.feed;
  });


  useEffect(() => {
    dispatch(fetchFeedData({userId, post}));
  }, [Comment, post]);

  return (
    <>
      {feed && (
        <InfiniteScroll
          dataLength={feed.length}
          next={() => setPost(post + 1)}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div id="feedContainer">
            {feed && (
              <div id="feed-inner-container">
                {feed.map((post) => {
                  return <Post key={post.id} post={post} />;
                })}
              </div>
            )}
          </div>
        </InfiniteScroll>
      )}
      {/* If there are no posts */}
      {feed.length === 0 && (
        <>
          <h1 id="no-posts">No Posts Here</h1>
          <NavLink to="/trending">Find some people to follow!</NavLink>
        </>
      )}
    </>
  );
}

export default Feed;
