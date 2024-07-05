import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./context/DataContext";

const Navbar = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <div className="Nav">
      <form
        className="searchForm"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
