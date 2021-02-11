import "./index.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserPostsData } from "../../store/userPosts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFollowData } from "../../store/follow";

import Follow from "../Follow";
import Post from "../Post";
import CreatePost from "../CreatePost/CreatePost";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [followStatus, setFollowStatus] = useState(false);
  const feed = useSelector((reduxState) => {
    return reduxState.userPosts.reverse();
  });
  let profileUserId = parseInt(id)
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
  if (!followStatus) {
    follow.filter((temp) => {
      if (temp.followedId === profileUserId) {
        setFollowStatus(true);
      }
    });
  }
  if (followStatus !== null) {
    if (profileUserId === loggedInUserId) {
      setFollowStatus(null);
      return;
    }
  }

  return (
    <div id="profile-page-container">
      <div id="profile-container">
        {profileUser && <h1>{profileUser.username}</h1>}
        {followStatus !== null && (
          <Follow followStatus={followStatus} follow={follow} followerId={loggedInUserId} followedId={profileUserId}/>
        )}
        {profileUser && (
          <img id="profPhoto" src={profileUser.profilePhotoUrl}></img>
        )}
        {profileUser && <p>{profileUser.bio}</p>}
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
          {allowCreatePost && <CreatePost userId={id} />}
        </div>
        <div id="feedContainer">
          {feed.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
