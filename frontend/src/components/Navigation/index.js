import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className="navbarElements">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <ul id="navbar">
      {sessionUser && (
        <li>
          <NavLink className="navbarElements" to={`/profile/${sessionUser.id}`}>
            Profile
          </NavLink>
        </li>
      )}
      { sessionUser &&<li>
        <NavLink className="navbarElements" to={`/trending`}>
          Trending
        </NavLink>
      </li>}
      <li id="linksContainer">
        <NavLink exact to="/" className="navbarElements">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
