import React from "react";
import { UserIcon, StarIcon, CartIcon, Logo } from "components/icons";
import SearchBox from "./SearchBox";
import { useUI } from "utils/hooks";
function Navbar() {
  const { toggleDrawer } = useUI();
  return (
    <header>
      <div className="flex items-center justify-between">
        <Logo />

        <SearchBox />
        <div className="flex">
          <div className="mr-8">
            <UserIcon />
          </div>
          <div className="relative mr-8">
            <div className="absolute -top-3 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <p className="text-white">0</p>
            </div>
            <StarIcon />
          </div>
          <div className="relative mr-8">
            <div className="absolute -top-3 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <p className="text-white">0</p>
            </div>
            <button onClick={toggleDrawer}>
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
      <nav className="flex justify-center py-2">
        <ul className="mr-8 font-semibold">Home</ul>
        <ul className="mr-8 font-semibold">Shop</ul>
        <ul className="mr-8 font-semibold">Product</ul>
        <ul className="mr-8 font-semibold">Pages</ul>
        <ul className="mr-8 font-semibold">Blogs</ul>
        <ul className="font-semibold">Features</ul>
      </nav>
    </header>
  );
}

export default Navbar;
