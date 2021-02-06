import "./index.css";

function Comment({ comment }) {
  console.log(comment);
  return <h1>{comment.text}</h1>;
}

export default Comment;
