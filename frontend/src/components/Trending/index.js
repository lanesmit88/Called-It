import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingData } from "../../store/feed";
import Post from "../Post";
import { useEffect } from "react";
function Trending() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const feed = useSelector((reduxState) => {
    return reduxState.trending;
  });
  useEffect(() => {
    dispatch(fetchTrendingData());
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

export default Trending;
