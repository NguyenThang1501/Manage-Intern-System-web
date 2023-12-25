import React from "react";
import { MdSearch } from "react-icons/md";
import "./search.css";

const Search = ({ searchText, onChange }) => {
  return (
    <div className="search-box">
      <MdSearch className="icon-search" />
      <input
        type="text"
        placeholder={searchText}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
