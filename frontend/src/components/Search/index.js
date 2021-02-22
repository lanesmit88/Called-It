import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchDispatch } from "../../store/search";
function Search() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);
  const search = useSelector((reduxState) => reduxState.search);

  useEffect(() => {
    dispatch(searchDispatch(searchText));
  });

  return (
    <div className="search-wrapper">
      <div className="search-box-container">
        <button className={focused ? "search-button focused" : "search-button"}>
          <i className="fa fa-search" />
          <input
            className="search-input"
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            type="text"
            placeholder="Search Users"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
        </button>
      </div>
    </div>
  );
}

export default Search;
