import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const loggedInUser = useSelector((reduxState) => {
    return reduxState.session.user;
  });
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {

  });

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {!loggedInUser && (
        <Route exact path="/">
          <LoginFormPage />
        </Route>
      )}
      {isLoaded && loggedInUser && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/">
            <Feed />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
