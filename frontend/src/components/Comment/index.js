import "./index.css";

function Comment({ comment }) {
  const {
    text,
    User: { id, username, profilePhotoUrl, bio },
  } = comment;

  return (
    <>
      <a href={`/profile/${id}`}>{username}</a>
      <h2>{text}</h2>
    </>
  );
}

export default Comment;
