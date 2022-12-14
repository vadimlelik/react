import React, { useState } from "react";

const Search = ({ cb }) => {
  const [value, setValue] = useState("");

  const hendleKey = (e) => {
    if (e.key === "Enter") {
      console.log("Enter");

      hendleSubmit();
    }
  };

  const hendleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div>
        <input
          placeholder="Search"
          onKeyDown={hendleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          id="search-field col s12"
        />
        <button onClick={hendleSubmit}> Search </button>
      </div>
    </div>
  );
};

export default Search;
