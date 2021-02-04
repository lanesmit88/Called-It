import "./index.css";

function UserInfo({ profPhoto, username }) {
  return (
    <div id="postUserInfo">
      <img id="profPhoto" src={profPhoto}></img>
      <h5>{username}</h5>
    </div>
  );
}

export default UserInfo;
