import { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";

function CreateComment() {
  const dispatch = useDispatch();
  function submitForm(e) {
    const [text, setText] = useState("");
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
