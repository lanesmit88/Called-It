import "./index.css";
import { NavLink } from "react-router-dom";

function Comment({ comment }) {
  const {
    text,
    User: { id, username, profilePhotoUrl, bio },
  } = comment;

  return (
    <div id="comment">
      <NavLink to={`/profile/${id}`} exact>
        {username}
      </NavLink>
      <h3>{text}</h3>
    </div>
  );
}

export default Comment;
