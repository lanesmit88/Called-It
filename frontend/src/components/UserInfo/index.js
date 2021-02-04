import "./index.css";

function UserInfo({ profPhoto, username }) {
  return (
    <div id="postUserInfo">
      <img
        id="profPhotoPost"
        src={profPhoto}
        alt="Not Found"
      ></img>
      <h5>{username}</h5>
    </div>
  );
}

export default UserInfo;
