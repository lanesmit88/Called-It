import "./index.css";
import { NavLink } from "react-router-dom";

function UserInfo({ profPhoto, username, userId }) {
  return (
    <div id="postUserInfo">
      {profPhoto ? (
        <>
          <NavLink to={`/profile/${userId}`} exact>
            <img id="profPhotoPost" alt="Not Found" src={profPhoto} />
          </NavLink>
          <NavLink to={`/profile/${userId}`} exact>
            {username}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={`/profile/${userId}`} exact>
            <img
              id="profPhotoPost"
              alt="Not Found"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </NavLink>
          <NavLink to={`/profile/${userId}`} exact>
            {username}
          </NavLink>
        </>
      )}
    </div>
  );
}

export default UserInfo;
