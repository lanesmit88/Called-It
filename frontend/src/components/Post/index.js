import React from "react";
import "./index.css"


function Post({text, id}) {


  return (
    <div className="postContainer">
        <h1>{text}</h1>
    </div>
  );
}

export default Post;
