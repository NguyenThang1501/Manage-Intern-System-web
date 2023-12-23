import React from "react";
import { MdSearch } from "react-icons/md";
import "./search.css";

const Search = ({ searchText }) => {
  return (
    <div className="search-box">
      <MdSearch className="icon-search" />
      <input type="text" placeholder={searchText} className="search-input" />
    </div>
  );
};

export default Search;
