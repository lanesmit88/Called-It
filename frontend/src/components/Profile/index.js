import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/user";
import { fetchUserPostsData } from "../../store/userPosts";
import { fetchAgreeData } from "../../store/agree";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import PostModal from "../../context/PostModal";
import Post from "../Post";
// import CreatePost from "../CreatePost";
import CreatePost from "../CreatePost/CreatePost";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const posts = useSelector((reduxState) => {
    return reduxState.userPosts;
  });

  const user = useSelector((reduxState) => {
    return reduxState.user;
  });

  const loggedInUserId = useSelector((reduxState) => {
    return reduxState.session.user.id;
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

  if (!user) {
    return null;
  }

  let allowCreatePost = loggedInUserId == id;

  return (
    <div id="profile-page-container">
      <div id="profile-container">
        {user && <h1>{user.username}</h1>}
        {user && <img id="profPhoto" src={user.profilePhotoUrl}></img>}
        {user && <p>{user.bio}</p>}
      </div>
      <div id="profile-posts">
        <div>
          {/* <p onClick={() => setShowModal(true)}>Make a Post</p>
          {showModal && (
            <PostModal onClose={() => setShowModal(false)}>
              <div id="modal-div">
                <CreatePost />
              </div>
            </PostModal>
          )} */}
          { allowCreatePost && <CreatePost userId={id} />}
        </div>
        <div>
          {posts &&
            posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
