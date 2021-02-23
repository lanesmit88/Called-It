import React, { useState } from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import "./index.css";

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
console.log(feedArr)
  return (
    <>
      <div id="feedContainer">
        <div id="feed-inner-container">
          {feedArr.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
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
