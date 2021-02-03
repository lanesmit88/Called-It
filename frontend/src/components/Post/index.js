import React from "react";
import "./index.css"


function Post({text}) {

  
  return (
    <div className="postContainer">
        <h1>{text}</h1>
    </div>
  );
}

export default Post;
