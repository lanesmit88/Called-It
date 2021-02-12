import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/userPosts";

function CreatePost({ userId }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();

  function submitForm(e) {
    e.preventDefault();
    dispatch(createPost({ userId, text, dueDate, active }));
    setText("");
    setDueDate("");
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <textarea
          placeholder="Enter prediction..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <input
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
