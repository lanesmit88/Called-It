const USERS_DATA = "users/usersData";

const usersData = (users) => ({
  type: USERS_DATA,
  users: users,
});

export const fetchUsersData = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/`);
    const resData = await res.json();
    dispatch(usersData(resData));
  };
};

const initialState = [];

function usersReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USERS_DATA:
      newState = action.users;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
