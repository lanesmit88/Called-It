import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../store/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);
  const user = useSelector((reduxState) => {
    return reduxState.user;
  });

  useEffect(() => {
    dispatch(fetchUserData(parseInt(id)))
  }, []);

  // useEffect(() => {
  //   function userFinder(val) {
  //     console.log(val.id);
  //     return val.id == id;
  //   }
  //   let userInfo = users.find(userFinder);
  //   setUser(userInfo)
  // }, [users, id]);

  // if (!user) {
  //   return null;
  // }
  return (
    <>
      {user && <h1>{user.username}</h1>}
      {user && <img src={user.profilePhotoUrl}></img>}
    </>
  );
}

export default Profile;
