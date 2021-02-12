import { fetch } from "./csrf.js";

const TRENDING_DATA = "trending/trendingData";

const TrendingData = (trending) => ({
  type: TRENDING_DATA,
  trending: trending,
});

export const fetchTrendingData = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/trending`);
    const resData = await res.data;
    dispatch(TrendingData(resData));
  };
};
const initialState = [];

function trendingReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case TRENDING_DATA:
      newState = action.trending;
      return newState;
    default:
      return state;
  }
}

export default trendingReducer;
