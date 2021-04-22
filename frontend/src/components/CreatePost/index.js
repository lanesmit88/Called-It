import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/userPosts";
import "./index.css";

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
    <div id="new-post-container">
      <form onSubmit={submitForm}>
        <textarea
          placeholder="Enter prediction..."
          value={text}
          id="post-textarea"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <div>
          <input
            placeholder="YYYY/MM/DD"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
          <button
            className="fas fa-plus"
            type="submit"
            id="post-button"
          ></button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
