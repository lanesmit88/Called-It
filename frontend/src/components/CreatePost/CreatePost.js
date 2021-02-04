import React from "react";

function CreatePost() {
  return (
    <div>
      <form action={""} method={"POST"}>
        <textarea placeholder="Enter prediction..."></textarea>
        <input placeholder="Due Date" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
