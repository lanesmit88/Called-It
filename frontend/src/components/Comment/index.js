import "./index.css";

function Comment({ comment }) {
  const {
    text,
    User: { id, username, profilePhotoUrl, bio },
  } = comment;
  console.log(comment);
  return (
    <>
      <p>{username}</p>
      <h2>{text}</h2>
    </>
  );
}

export default Comment;
