import "./index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateComment } from "../../store/comment";

function CreateComment({ userId, postId }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (text.length > 0) {
      dispatch(fetchCreateComment({ text, userId, postId }));
      setText("");
    }
  }

  return (
    <>
      <form onSubmit={submitForm} id="comment-form">
        <input
          id="comment-textarea"
          placeholder="Type here..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          className="fas fa-plus"
          id="comment-button"
          type="submit"
        ></button>
      </form>
    </>
  );
}

export default CreateComment;
