import React from "react";
import { UserIcon, StarIcon, CartIcon, Logo } from "components/icons";
import SearchBox from "./SearchBox";
import { useUI } from "utils/hooks";
import { map } from "underscore";
function Navbar() {
  const { openDrawer } = useUI();
  const menuItems = ["Home", "Shop", "Product", "Pages", "Blogs", "Features"];
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
          <button
            onClick={() => openDrawer()}
            className="relative mr-8 border-0 bg-white"
          >
            <div className="absolute -top-3 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <p className="text-white">0</p>
            </div>
            <CartIcon />
          </button>
        </div>
      </div>
      <nav className="flex justify-center py-2">
        {map(menuItems, (item, idx) => {
          return (
            <a className="cursor-pointer px-3" key={idx}>
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;
