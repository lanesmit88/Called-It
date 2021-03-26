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
import Footer from "./components/Footer"
import UploadPictureForm from "./components/UploadPictureForm";

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
          <Route path="/signup">
            <Navigation isLoaded={isLoaded} />
            <SignupFormPage />
            <Footer />
          </Route>
          <Route path="/testing">
            <UploadPictureForm />
          </Route>
          <Route path="/profile/:id">
            <Navigation isLoaded={isLoaded} />
            <Profile />
            <Footer />
          </Route>
          <Route path="/trending">
            <Navigation isLoaded={isLoaded} />
            <Trending />
            <Footer />
          </Route>
          <Route exact path="/">
            <Navigation isLoaded={isLoaded} />
            <Feed />
            <Footer />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
