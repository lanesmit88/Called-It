import React from "react";

function CreatePost({userId}) {
  return (
    <div>
      <form action={`/api/users/${userId}/post`} method={"POST"}>
        {/* <input type='hidden' name='_csrf' value={csrfToken} /> */}
        <textarea placeholder="Enter prediction..."></textarea>
        <input placeholder="Due Date" />
        <button type="submit">Post</button>
      </form>/
    </div>
  );
}

export default CreatePost;
