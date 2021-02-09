import "./index.css";

function UserInfo({ profPhoto, username, userId }) {
  return (
    <div id="postUserInfo">
      {profPhoto ? (
        <>
          <img id="profPhotoPost" alt="Not Found" src={profPhoto} />
          <a href={`/profile/${userId}`}>{username}</a>
        </>
      ) : (
        <>
          <img
            id="profPhotoPost"
            alt="Not Found"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
          <a href={`/profile/${userId}`}>{username}</a>
        </>
      )}
    </div>
  );
}

export default UserInfo;
