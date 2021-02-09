import { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import fetchCreateComment from "../../store/comment";

function CreateComment({ userId, postId }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  function submitForm(e) {
    e.preventDefault();
    dispatch(fetchCreateComment({ text, userId, postId }));
  }

  return (
    <>
      <form>
        <button
          id="agreeable-button"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="submit"
        >
          Add Comment
        </button>
        <textarea placeholder="Type here..."></textarea>
      </form>
    </>
  );
}

export default CreateComment;
