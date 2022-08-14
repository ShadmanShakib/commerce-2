import React from "react";
import { Logo } from "components/icons";
function Footer() {
  return (
    <footer className="mx-auto grid max-w-screen-xl content-between gap-4 py-10 xl:grid-cols-4">
      <div className="">
        <Logo />
        <p className="">
          Super class, cute, comfortable. You can wear them with just about
          anything.
        </p>
      </div>
      <div className="flex flex-col ">
        <h3>Good emails</h3>
        <p>Give your inbox some love with new products, tips, & more.</p>
        <input type="text" />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-semibold">Information</h1>
        <a>My account</a>
        <a>Cart</a>
        <a>Whitelist</a>
        <a href="">Compare Products</a>
      </div>
      <div className="flex flex-col ">
        <h1 className="mb-2 font-semibold">Contact</h1>
        <a>About us</a>
        <a>Contact us</a>
        <a>Careers</a>
        <a>Blog</a>
      </div>
    </footer>
  );
}

export default Footer;
