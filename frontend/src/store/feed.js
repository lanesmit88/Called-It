import { fetch } from "./csrf.js";

const FEED_DATA = "feed/feedData";

const TRENDING_DATA = "trending/trendingData";

const feedData = (feed) => ({
  type: FEED_DATA,
  feed: feed,
});

const TrendingData = (trending) => ({
  type: TRENDING_DATA,
  trending: trending,
});

export const fetchFeedData = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/feed/${body.userId}/${body.post}`);
    const resData = await res.data;
    dispatch(feedData(resData));
  };
};

export const fetchTrendingData = (post) => {
  return async (dispatch) => {
    const res = await fetch(`/api/trending/${post}`);
    const resData = await res.data;
    dispatch(TrendingData(resData));
  };
};

const initialState = [];

function feedReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FEED_DATA:
      newState = action.feed;
      return newState;
    case TRENDING_DATA:
      newState = action.trending;
      return newState;
    default:
      return state;
  }
}

export default feedReducer;
