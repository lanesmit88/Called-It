import { fetch } from "./csrf.js";

const FOLLOW_DATA = "follow/followData";

const followData = (follow) => ({
  type: FOLLOW_DATA,
  follow: follow,
});

export const fetchFollowData = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/follow/${id}`);
    const resData = await res.data;
    dispatch(followData(resData));
  };
};

const initialState = [];

function followReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FOLLOW_DATA:
      newState = action.follow;
      return newState;
    default:
      return state;
  }
}

export default followReducer;
