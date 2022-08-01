import React from "react";
import { SearchIcon } from "components/icons";

function SearchBox() {
  return (
    <div className="flex items-center  bg-gray-100 ">
      <input
        className="h-8 outline-none bg-gray-100  px-3 rounded-sm"
        placeholder="Search products"
      />
      <SearchIcon />
    </div>
  );
}

export default SearchBox;
