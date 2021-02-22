import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchDispatch } from "../../store/search";
import "./index.css";
function Search() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const search = useSelector((reduxState) => reduxState.search);

  useEffect(() => {
    dispatch(searchDispatch(searchText));
  }, [dispatch, searchText]);

  return (
    <div className="search-wrapper">
      <div className="search-box-container">
        <button>
          <i id="search-icon" className="fa fa-search" />
          <input
            className="search-input"
            type="text"
            placeholder="Search Users"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
        </button>
      </div>
      <ul>
        {search.length &&
          showSearch &&
          search.map((user) => {
            return (
              <li>
                <NavLink to={`/profile/${user.id}`}>{user.username}</NavLink>;
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Search;
