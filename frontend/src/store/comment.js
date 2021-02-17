import { fetch } from "./csrf.js";

const COMMENTS_DATA = "comments/commentData";
const CREATE_COMMENT = "comments/createComment";
const DELETE_COMMENT = "comments/deleteComment";

const CommentsData = (comments) => ({
  type: COMMENTS_DATA,
  comments: comments,
});

const CreateComment = (comment) => ({
  type: CREATE_COMMENT,
  comment: comment,
});

const DeleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment: comment,
});

export const fetchCommentsData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/comments/${postId}`);
    const resData = await res.data;
    dispatch(CommentsData(resData));
  };
};

export const fetchCreateComment = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/comments/post`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const createComment = res.data.createComment;
    dispatch(CreateComment(createComment));
  };
};

export const fetchDeleteComment = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/comments/${body.commentId}/delete`, {
      method: "DELETE",
      body: JSON.stringify(body),
    });

    const deleteComment = res.data.deleteComment;
    dispatch(DeleteComment(deleteComment));
  };
};

const initialState = {};
// comments is a object where the key is the postId and the value is an array of  comment objects for that post
function commentsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case COMMENTS_DATA:
      const newComments = {};
      action.comments.forEach((comment) => {
        if (newComments[comment.postId]) {
          newComments[comment.postId].push(comment);
        } else {
          newComments[comment.postId] = [comment];
        }
      });
      return { ...state, ...newComments };
    case CREATE_COMMENT:
      newState = JSON.parse(JSON.stringify(state));
      if (newState[action.comment.postId]) {
        newState[action.comment.postId].push(action.comment);
        return newState;
      } else {
        newState[action.comment.postId] = [action.comment];
        return newState;
      }
    case DELETE_COMMENT:
      // state.filter((comment) => comment.id !== action.comment.id)
      console.log(state, "-------------------", action.comment);
      newState = JSON.parse(JSON.stringify(state));
      let comments;
      const post = newState[action.comment.postId];
      comments = post.filter(
        (comment) => comment.id !== action.comment.commentId
      );
        newState[action.comment.postId] = comments;
      return newState
    default:
      return state;
  }
}

export default commentsReducer;
