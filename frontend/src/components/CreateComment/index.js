import { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { fetchCreateComment } from "../../store/comment";

function CreateComment({ userId, postId }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  function submitForm(e) {
    e.preventDefault();
    dispatch(fetchCreateComment({ text, userId, postId }));
    setText("")
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <textarea
          placeholder="Type here..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button id="agreeable-button" type="submit">
          Add Comment
        </button>
      </form>
    </>
  );
}

export default CreateComment;
