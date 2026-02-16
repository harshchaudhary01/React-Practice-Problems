import React from "react";

const SearchBar = ({ query, setQuery, placeholder }) => {
  return (
    <input
      type="text"
      value={query}
      placeholder={placeholder}
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: "8px", width: "250px" }}
    />
  );
};

export default SearchBar;
