import { fetch } from "./csrf.js";

const FOLLOW_DATA = "follow/followData";
const CREATE_FOLLOW = "follow/createFollow";

const FollowData = (follow) => ({
  type: FOLLOW_DATA,
  follow: follow,
});

const CreateFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow: follow,
});

export const fetchFollowData = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/follow/${id}`);
    const resData = await res.data;
    dispatch(FollowData(resData));
  };
};

export const fetchCreateFollow = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/follow/${body.followedId}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const createFollow = res.data.CreateFollow;
    dispatch(CreateFollow(createFollow));
  };
};

const initialState = [];

function followReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FOLLOW_DATA:
      newState = action.follow;
      return [...newState];
      case CREATE_FOLLOW:
        return action.follow
    default:
      return state;
  }
}

export default followReducer;
