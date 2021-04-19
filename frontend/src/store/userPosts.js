import { fetch } from "./csrf.js";

const USER_POSTS_DATA = "userposts/userPostsData";

const NEW_POST = "posts/createPost";

const DELETE_POST = "posts/deletePost";

const COMPLETE_POST = "posts/completePost";

const UPDATE_BIO = "user/updateBio";

const UPDATE_PROF_PHOTO = "user/updateProfPhoto";

const CreatePost = (post) => ({
  type: NEW_POST,
  post: post,
});

const DeletePost = (post) => ({
  type: DELETE_POST,
  post: post,
});

const CompletePost = (post) => ({
  type: COMPLETE_POST,
  post: post,
});

const userPostsData = (userPosts) => ({
  type: USER_POSTS_DATA,
  userPosts: userPosts,
});

const UpdateBio = (bio) => ({
  type: UPDATE_BIO,
  bio: bio,
});

const UpdateProfPhoto = (photo) => ({
  type: UPDATE_PROF_PHOTO,
  photo: photo,
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

export const fetchDeletePost = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${body.userId}/${body.id}/delete`, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const deletePost = res.data.deletePost;
    dispatch(DeletePost(deletePost));
  };
};

export const fetchCompletePost = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${body.userId}/${body.id}/complete`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const completePost = res.data.completePost;
    dispatch(CompletePost(completePost));
  };
};

export const updateBio = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${body.profileUserId}/bio`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const updateBio = res.data.posts;
    dispatch(UpdateBio(updateBio));
  };
};

export const updateProfPhoto = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${body.profileUserId}/profPhoto`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    const updatedProfPic = res.data.profPic;
    dispatch(UpdateProfPhoto(updatedProfPic));
  };
};

const initialState = [];

function userPostsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_POSTS_DATA:
      return action.userPosts;
    case NEW_POST:
      return [...state, action.post];
    case DELETE_POST:
      return state.filter((piece) => piece.id !== action.post.id);
    case COMPLETE_POST:
      return state.filter((piece) => piece.id !== action.post.id);
    case UPDATE_BIO:
      return action.bio;
    case UPDATE_PROF_PHOTO:
      return action.profPic;
    default:
      return state;
  }
}

export default userPostsReducer;
