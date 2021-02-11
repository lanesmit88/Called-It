import { fetch } from "./csrf.js";

const FOLLOW_DATA = "follow/followData";
const CREATE_FOLLOW = "follow/createFollow";
const REMOVE_FOLLOW = "follow/removeFollow";

const FollowData = (follow) => ({
  type: FOLLOW_DATA,
  follow: follow,
});

const CreateFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow: follow,
});

const RemoveFollow = (follow) => ({
  type: REMOVE_FOLLOW,
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
export const fetchRemoveFollow = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/follow/${body.followedId}`, {
      method: "DELETE",
      body: JSON.stringify(body),
    });
    const removeFollow = res.data.removeFollow;
    dispatch(CreateFollow(removeFollow));
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
      return [...state, action.follow];
    case REMOVE_FOLLOW:
      return [...state, action.follow];
    default:
      return state;
  }
}

export default followReducer;
