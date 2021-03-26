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
      headers: { "Content-Type": "application/json" },
    });
    const createFollow = res.data.createFollow;
    dispatch(CreateFollow(createFollow));
  };
};

export const fetchRemoveFollow = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/follow/${body.followedId}`, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const removeFollow = res.data.removeFollow;
    dispatch(RemoveFollow(removeFollow));
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
      return state.filter(
        (piece) => piece.followedId !== action.follow.followedId
      );
    default:
      return state;
  }
}

export default followReducer;
