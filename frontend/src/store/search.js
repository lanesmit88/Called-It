import { fetch } from "./csrf.js";

const SEARCH = "search/searchResult";

const loadSearchResults = (search) => ({
  type: SEARCH,
  search: search,
});

export const searchDispatch = (query) => async (dispatch) => {
  const res = await fetch(`/api/search/${query}`);
  const users = res.data.users;
  dispatch(loadSearchResults(users));
};

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SEARCH:
      return action.search;
    default:
      return state;
  }
}

export default reducer;
