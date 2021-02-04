import "./index.css";

function UserInfo({ profPhoto, username, userId }) {
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
