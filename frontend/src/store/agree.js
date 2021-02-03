const AGREE_DATA = "agree/agreeData";

const agreeData = (agree) => ({
  type: AGREE_DATA,
  agree: agree,
});

export const fetchAgreeData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/agree/${postId}`);
    const resData = await res.json();
    dispatch(agreeData(resData));
  };
};

const initialState = [];

function agreeReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case AGREE_DATA:
      newState = action.agree;
      return newState;
    default:
      return state;
  }
}

export default agreeReducer;
