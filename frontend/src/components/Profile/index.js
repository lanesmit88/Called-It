import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/user";
import { fetchUserPostsData } from "../../store/userPosts";
import { fetchAgreeData } from "../../store/agree";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { userState, setUserState } = useState(null);
  // const { postsState, setPostsState } = useState(null);
  
  const posts = useSelector((reduxState) => {
    return reduxState.userPosts;
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

  useEffect(() => {
    dispatch(fetchAgreeData());
  }, []);

  // useEffect(() => {geting 

  //   setUserState(userInfo)
  // }, [users, id]);

  if (!user) {
    return null;
  }
console.log(posts)
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
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
