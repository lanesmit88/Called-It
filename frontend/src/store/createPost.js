import { fetch } from "./csrf.js";

const CREATE_POST = "posts/createPost";

const CreatePost = (post) => ({
  type: CREATE_POST,
  post: post,
});

export const createPost = (userId, text, dueDate) => {
  return async (dispatch) => {
    const body = {
      userId,
      text,
      dueDate,
    };
    const res = await fetch(`/api/profile/${userId}/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(body),
    });

    const newPost = res.data.fullPost;
    dispatch(CreatePost(newPost))

  };
};
