import React from "react";
import { SearchIcon } from "components/icons";

function SearchBox() {
  return (
    <div className="flex items-center rounded-md  bg-gray-100 ">
      <input
        className="h-10 outline-none bg-gray-100 w-80 px-3 py-2 rounded-sm"
        placeholder="Search products"
      />
      <button className="p-3 rounded-r-md">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBox;
