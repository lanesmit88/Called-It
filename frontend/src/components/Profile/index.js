import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersData } from "../../store/users";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  console.log(id);
  const users = useSelector((reduxState) => {
    return reduxState.users;
  });

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  useEffect(() => {
    function userFinder(val) {
      console.log(val.id);
      return val.id == id;
    }
    let userInfo = users.find(userFinder);
    console.log(userInfo)
    setUser(userInfo)
  }, [users, id]);

  if (!user) {
    return null;
  }

  console.log("---------------", user)
  return (
    <>
      {user && <h1>{user.username}</h1>}
      {user && <img src={user.profilePhotoUrl}></img>}
    </>
  );
}

export default Profile;
