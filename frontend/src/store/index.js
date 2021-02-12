import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import feedReducer from "./feed";
import agreeReducer from "./agree";
import disagreeReducer from "./disagree";
import userReducer from "./user";
import usersReducer from "./users";
import userPostsReducer from "./userPosts";
import commentsReducer from "./comment";
import followReducer from "./follow";
import trendingReducer from "./trending";


const rootReducer = combineReducers({
  session,
  feed: feedReducer,
  agree: agreeReducer,
  disagree: disagreeReducer,
  user: userReducer,
  userPosts: userPostsReducer,
  users: usersReducer,
  comments: commentsReducer,
  follow: followReducer,
  trending: trendingReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
