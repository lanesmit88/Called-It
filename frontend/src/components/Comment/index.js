import "./index.css";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchDeleteComment } from "../../store/comment";


function Comment({ comment }) {
  const {
    text,
    id,
    userId,
    postId,
    User: { username, profilePhotoUrl, bio },
  } = comment;
  const dispatch = useDispatch();

  function submitDeleteComment(e) {
    e.preventDefault();
    dispatch(fetchDeleteComment({ id, userId, postId }));
  }

  return (
    <div id="comment">
      <NavLink to={`/profile/${id}`} exact>
        {username}
      </NavLink>
      <h3>{text}</h3>
      <form onSubmit={submitDeleteComment}>
        <button
          id="delete-comment"
          className="fas fa-times"
          value={deleteComment}
          onChange={(e) => {
            setDeleteComment(e.target.value);
          }}
          type="submit"
        ></button>
      </form>
    </div>
  );
}

export default Comment;
