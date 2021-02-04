const USER_DATA = "user/userData";

const userData = (user) => ({
  type: USER_DATA,
  user: user,
});

export const fetchUserData = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const resData = await res.json();
    dispatch(userData(resData));
  };
};

const initialState = [];

function userReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_DATA:
      newState = action.user;
      return newState;
    default:
      return state;
  }
}

export default userReducer;
