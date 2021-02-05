import { fetch } from "./csrf.js";

const USER_POSTS_DATA = "userposts/userPostsData";
const NEW_POST = "posts/createPost";

const CreatePost = (post) => ({
  type: NEW_POST,
  post: post,
});

const userPostsData = (userPosts) => ({
  type: USER_POSTS_DATA,
  userPosts: userPosts,
});

export const fetchUserPostsData = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/posts`);
    const { posts } = res.data;
    dispatch(userPostsData(posts));
  };
};

export const createPost = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${body.userId}/post`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const newPost = res.data.createPost;
    dispatch(CreatePost(newPost));
  };
};

const initialState = [];

function userPostsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_POSTS_DATA:
      return action.userPosts;
    case NEW_POST:
      return [...state, action.post]
    default:
      return state;
  }
}

export default userPostsReducer;
