const USER_POSTS_DATA = "userposts/userPostsData";

const userPostsData = (userPosts) => ({
  type: USER_POSTS_DATA,
  userPosts: userPosts,
});

export const fetchUserPostsData = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/posts`);
    const { posts } = await res.json();
    dispatch(userPostsData(posts));
  };
};

const initialState = [];

function userPostsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_POSTS_DATA:
      return action.userPosts;
    default:
      return state;
  }
}

export default userPostsReducer;
