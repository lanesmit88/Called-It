import "./index.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeleteComment } from "../../store/comment";
import { useState } from "react";

function Comment({ comment, loggedInUserId, posterId }) {
  const {
    text,
    id: commentId,
    userId,
    postId,
    User: { username, profilePhotoUrl, bio },
  } = comment;

  const dispatch = useDispatch();
  const [deleteComment, setDeleteComment] = useState(true);

  function submitDeleteComment(e) {
    e.preventDefault();
    dispatch(fetchDeleteComment({ commentId, userId, postId }));
  }

  return (
    <div id="comment">
      <NavLink to={`/profile/${userId}`} exact>
        {username}
      </NavLink>
      <h3>{text}</h3>
      {(loggedInUserId === userId || loggedInUserId === posterId) && (
        <form onSubmit={submitDeleteComment}>
          <button
            id="delete-comment-button"
            className="fas fa-trash"
            value={deleteComment}
            onChange={(e) => {
              setDeleteComment(e.target.value);
            }}
            type="submit"
          ></button>
        </form>
      )}
    </div>
  );
}

export default Comment;
