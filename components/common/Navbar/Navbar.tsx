import React from "react";
import { UserIcon, StarIcon, CartIcon } from "components/icons";
import SearchBox from "./SearchBox";
import Image from "next/image";
function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <Image
          alt="logo"
          width={180}
          height={53}
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/logo_180x.png?v=1623384115"
        />
        <SearchBox />
        <div className="flex">
          <UserIcon />
          <div className="relative mr-4">
            <div className="absolute bg-black rounded-full h-5 w-5 flex items-center justify-center -top-3 -right-2">
              <p className="text-white">0</p>
            </div>
            <StarIcon />
          </div>
          <CartIcon />
        </div>
      </div>
      <nav className="flex justify-center">
        <ul className="mr-4">Home</ul>
        <ul>Shop</ul>
        <ul>Product</ul>
        <ul>Pages</ul>
        <ul>Blogs</ul>
        <ul>Features</ul>
      </nav>
    </header>
  );
}

export default Navbar;
