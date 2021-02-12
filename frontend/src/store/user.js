import { fetch } from "./csrf.js";

const USER_DATA = "user/userData";

const UPDATE_BIO = "user/updateBio";

const userData = (user) => ({
  type: USER_DATA,
  user: user,
});

const UpdateBio = (bio) => ({
  type: UPDATE_BIO,
  bio: bio,
});

export const fetchUserData = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const { user } = await res.data;
    dispatch(userData(user));
  };
};

export const updateBio = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/bio`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    const updateBio = res.data.updateBio;
    dispatch(UpdateBio(updateBio));
  };
};

const initialState = {};

function userReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_DATA:
      return action.user;
    case UPDATE_BIO:
      return action.bio
    default:
      return state;
  }
}

export default userReducer;
