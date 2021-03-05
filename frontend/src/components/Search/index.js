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
        <button className="search-button">
          <i id="search-icon" className="fa fa-search" />
          <input
            className="search-input"
            type="text"
            placeholder="Search Users"
            value={searchText}
            onFocus={() => setShowSearch(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSearch(false);
              }, 200)
            }
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
          <ul id="user-search-list">
            {search.length &&
              showSearch &&
              search.map((user) => {
                return (
                  <li className="user-search-result">
                    <NavLink
                      className="user-search-result-text-username"
                      to={`/profile/${user.id}`}
                    >
                      {user.username}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </button>
      </div>
    </div>
  );
}

export default Search;
