import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingData } from "../../store/feed";
import Post from "../Post";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const [post, setPost] = useState(1);
  const dispatch = useDispatch();
  const feed = useSelector((reduxState) => {
    return reduxState.trending;
  });

  useEffect(() => {
    dispatch(fetchTrendingData(post));
  }, [post]);

  return (
    <InfiniteScroll
      dataLength={feed.length}
      next={() => setPost(post + 1)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div id="feedContainer">
        <div id="feed-inner-container">
          {feed.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Trending;
