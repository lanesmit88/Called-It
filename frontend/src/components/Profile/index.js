import "./index.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserPostsData } from "../../store/userPosts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFollowData } from "../../store/follow";
import { updateBio } from "../../store/userPosts";

import Follow from "../Follow";
import Post from "../Post";
import CreatePost from "../CreatePost/CreatePost";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [followStatus, setFollowStatus] = useState(false);
  const [text, setText] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showEditBio, setShowEditBio] = useState(false);
  const feedArr = useSelector((reduxState) => {
    return reduxState.userPosts.reverse();
  });
  window.scrollTo(0, 0);
  let profileUserId = parseInt(id);

  let profileUser;

  useSelector((reduxState) => {
    reduxState.userPosts.find((post) => {
      profileUser = post.User;
    });
  });

  const loggedInUserId = useSelector((reduxState) => {
    return reduxState.session.user.id;
  });

  const follow = useSelector((reduxState) => {
    return reduxState.follow;
  });

  useEffect(() => {
    dispatch(fetchUserPostsData(id));
  }, [id]);

  useEffect(() => {
    dispatch(fetchFollowData(loggedInUserId));
  }, []);

  let allowCreatePost = loggedInUserId === profileUserId;

  useEffect(() => {
    if (profileUserId === loggedInUserId) {
      setFollowStatus(null);
      return;
    }
    const status = follow.some(
      (eachFollow) => eachFollow.followedId === profileUserId
    );
    setFollowStatus(status);
  }, [follow, profileUserId]);

  function editBio(e) {
    e.preventDefault();
    dispatch(updateBio({ text, profileUserId }));
    setShowEditBio(!showEditBio);
    setText("");
  }

  function showCreatePostHandeler(e) {
    e.preventDefault();
    setShowCreatePost(!showCreatePost);
  }

  function showEditBioHandeler(e) {
    e.preventDefault();
    setShowEditBio(!showEditBio);
  }
  let feed = feedArr.sort((a, b) => a.id - b.id);

  return (
    <div id="profile-page-container">
      <div id="profile-container">
        {followStatus !== null && (
          <Follow
            followStatus={followStatus}
            follow={follow}
            followerId={loggedInUserId}
            followedId={profileUserId}
          />
        )}
        {profileUser && (
          <img id="profPhoto" src={profileUser.profilePhotoUrl}></img>
        )}
        {!profileUser && (
          <img
            id="profPhoto"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          ></img>
        )}
        <div id="username-follow">
          {profileUser && <h1 id="profile-username">{profileUser.username}</h1>}
        </div>
        <div id="username-follow">
          {!profileUser && <h1 id="profile-username"></h1>}
        </div>
        {profileUser && profileUser.bio ? (
          <p id="profile-bio">{profileUser.bio}</p>
        ) : (
          <p id="profile-bio">No bio yet...</p>
        )}
        <div id="profile-buttons">
          {profileUser && loggedInUserId === profileUserId && showEditBio && (
            <form onSubmit={showEditBioHandeler}>
              <button value={showEditBio} id="edit-bio-button" >Cancel</button>
            </form>
          )}
          {profileUser && loggedInUserId === profileUserId && !showEditBio && (
            <form onSubmit={showEditBioHandeler}>
              <button value={showEditBio}>Edit Bio</button>
            </form>
          )}
          {profileUser && loggedInUserId === profileUserId && showEditBio && (
            <>
              <form onSubmit={editBio} id="edit-bio">
                <textarea
                  placeholder="Type here..."
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                ></textarea>
                <button>Submit</button>
              </form>
            </>
          )}
          {profileUser && loggedInUserId === profileUserId && showCreatePost && (
            <form onSubmit={showCreatePostHandeler}>
              <button value={showCreatePost}>Cancel</button>
            </form>
          )}
          {profileUser && loggedInUserId === profileUserId && !showCreatePost && (
            <form onSubmit={showCreatePostHandeler}>
              <button value={showCreatePost}>New Post</button>
            </form>
          )}
        </div>
      </div>
      {allowCreatePost && showCreatePost && <CreatePost userId={id} />}
      <div id="profileFeedContainer">
        {feed.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Profile;
