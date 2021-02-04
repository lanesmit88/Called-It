import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/user";
import { fetchUserPostsData } from "../../store/userPosts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { userState, setUserState } = useState(null);
  // const { postsState, setPostsState } = useState(null);
  
  const posts = useSelector((reduxState) => {
    return reduxState.posts;
  });

  const user = useSelector((reduxState) => {
    return reduxState.user;
  });


  useEffect(() => {
    dispatch(fetchUserData(id));
  }, []);

  useEffect(() => {
    dispatch(fetchUserPostsData(id));
  }, []);

  // useEffect(() => {geting 

  //   setUserState(userInfo)
  // }, [users, id]);

  if (!user) {
    return null;
  }

  if (!posts) {
    return null;
  }

  return (
    <div>
      <div id="profile-container">
        {user && <h1>{user.username}</h1>}
        {user && <img id="profPhoto" src={user.profilePhotoUrl}></img>}
        {user && <p>{user.bio}</p>}
      </div>
      <div>
        {posts && posts.map((post) => {
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
    </div>
  );
}

export default Profile;
