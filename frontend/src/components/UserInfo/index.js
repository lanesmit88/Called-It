import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import createPost from"../../store/

function UserInfo({ profPhoto, username, userId }) {
  const dispatch = useDispatch();

  dispatch(createPost( userId, ))

  return (
    <div id="postUserInfo">
      <img
        id="profPhotoPost"
        src={profPhoto}
        alt="Not Found"
      ></img>
      <a href={`/profile/${userId}`} >{username}</a>
    </div>
  );
}

export default UserInfo;
