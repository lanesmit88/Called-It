import React from "react";
import Post from "../Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedData } from "../../store/feed";
import { useEffect } from "react";

function Feed() {
  const dispatch = useDispatch();
  const userId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });
  const feedData = useSelector((reduxState) => {
    return reduxState.feed;
  });
  
  useEffect(() => {
    dispatch(fetchFeedData(userId));
  }, []);

  return (
    <div>
      {/* {feedData && feedData.map((post) => {
        return (
          <Post
            key={post.id}
            caption={post.caption}
            comment={post.comment}
            createdAt={post.createdAt}
            hashtags={post.hashtags}
            id={post.id}
            likes={post.likes}
            location={post.location}
            photoData={post.photoData}
            updatedAt={post.updatedAt}
            userId={post.userId}
          />
        );
      })} */}

    </div>
  );
}

export default Feed;
