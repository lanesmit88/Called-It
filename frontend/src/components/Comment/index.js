import "./index.css";
import { NavLink } from "react-router-dom";

function Comment({ comment }) {
  const {
    text,
    User: { id, username, profilePhotoUrl, bio },
  } = comment;

  return (
    <>
      <NavLink to={`/profile/${id}`} exact>
        {username}
      </NavLink>
      <h2>{text}</h2>
    </>
  );
}

export default Comment;
