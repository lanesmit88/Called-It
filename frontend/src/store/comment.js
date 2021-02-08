import { fetch } from "./csrf.js";

const COMMENTS_DATA = "comments/commentData";

const commentsData = (comments) => ({
  type: COMMENTS_DATA,
  comments
});

export const fetchCommentsData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/comments/${postId}`);
    const resData = await res.data;
    dispatch(commentsData(resData));
  };
};

const initialState = [];

function commentsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case COMMENTS_DATA:
      newState = action.comments;
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;
