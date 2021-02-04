import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const posts = useSelector((reduxState) => {
    return reduxState.user.posts;
  });

  const user = useSelector((reduxState) => {
    return reduxState.user.user;
  });

  console.log("big", posts);

  useEffect(() => {
    dispatch(fetchUserData(parseInt(id)));
  }, []);

  // useEffect(() => {
  //   function userFinder(val) {
  //     console.log(val.id);
  //     return val.id == id;
  //   }
  //   let userInfo = users.find(userFinder);
  //   setUser(userInfo)
  // }, [users, id]);

  // if (!user) {
  //   return null;
  // }

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
        {posts.map((post) => {
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
