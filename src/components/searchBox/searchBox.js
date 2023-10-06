import React, { useState } from "react";
import SearchIcon from "./searchIcon";
import "./index.css";

const SearchBox = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    onSearch(searchTerm);
  };

  return(
  <div className="search-box">
    <SearchIcon />
    <input
        type="text"
        placeholder="Busca en este sitio web"
        value={term}
        onChange={handleInputChange}
      />
  </div>
)};

export default SearchBox;
