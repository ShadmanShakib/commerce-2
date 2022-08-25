import React from "react";
import { SearchIcon } from "components/icons";
function SearchBox() {
  return (
    <div className="flex w-2/4 items-center rounded-md  bg-gray-100 ">
      <input
        className="h-10 w-full rounded-sm bg-gray-100 px-3 py-2 outline-none"
        placeholder="Search products"
      />
      <button className="rounded-r-md p-3">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBox;
