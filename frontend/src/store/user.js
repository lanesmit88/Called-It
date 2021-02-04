const USER_DATA = "user/userData";

const userData = (user) => ({
  type: USER_DATA,
  user: user,
});

export const fetchUserData = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const {user} = await res.json();
    dispatch(userData(user));
  };
};

const initialState = {};

function userReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_DATA:
      return action.user;
    default:
      return state;
  }
}

export default userReducer;
