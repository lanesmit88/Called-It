import React, { useState } from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Feed() {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  const feed = useSelector((reduxState) => {
    return reduxState.feed;
  });

  useEffect(() => {
    dispatch(fetchFeedData(userId));
  }, [Comment]);

  let feedArr = feed.sort((a, b) => b.id - a.id);
  return (
    <>
      <div id="feedContainer">
        {feedArr && (
          <div id="feed-inner-container">
            {feedArr.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        )}
        {feedArr.length === 0 && (
          <>
            <h1 id="no-posts">No Posts Here</h1>
            <NavLink to="/trending">Find some people to follow!</NavLink>
          </>
        )}
        {/* {feed && (
          <InfiniteScroll
            className="journal-entries-list-container"
            dataLength={feed.length}
            next={() => setPage(page + 1)}
            loader={<h4>Loading...</h4>}
            hasMore={true}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {feed.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </InfiniteScroll>
        )} */}
      </div>
    </>
  );
}

export default Feed;
