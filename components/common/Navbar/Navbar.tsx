import React from "react";
import { UserIcon, StarIcon, CartIcon } from "components/icons";
import SearchBox from "./SearchBox";
function Navbar() {
  return (
    <header>
      <h1>Header</h1>
      <SearchBox />
      <div className="flex">
        <UserIcon />
        <StarIcon />
        <CartIcon />
      </div>
    </header>
  );
}

export default Navbar;
