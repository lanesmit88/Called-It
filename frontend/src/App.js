import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Trending from "./components/Trending";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const loggedInUser = useSelector((reduxState) => {
    return reduxState.session.user;
  });
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {!loggedInUser && (
        <Switch>
          <Route exact path="/">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}

      {isLoaded && loggedInUser && (
        <Switch>
          <Route path="/login">
            <Navigation isLoaded={isLoaded} />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Navigation isLoaded={isLoaded} />
            <SignupFormPage />
          </Route>
          <Route path="/profile/:id">
            <Navigation isLoaded={isLoaded} />
            <Profile />
          </Route>
          <Route path="/trending">
            <Navigation isLoaded={isLoaded} />
            <Trending />
          </Route>
          <Route exact path="/">
            <Navigation isLoaded={isLoaded} />
            <Feed />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
