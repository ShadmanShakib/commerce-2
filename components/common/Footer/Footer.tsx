import React from "react";
import { Logo } from "components/icons";
function Footer() {
  return (
    <section className="mx-auto grid max-w-screen-xl py-6 xl:grid-cols-5">
      <div className="col-span-2 ">
        <Logo />
        <p>
          Super class, cute, comfortable. You can wear them with just about
          anything.
        </p>
      </div>
      <div className="flex flex-col">
        <h3>Good emails</h3>
        <p>Give your inbox some love with new products, tips, & more.</p>
        <input type="text" />
      </div>
      <div className="flex flex-col">
        <h1>Information</h1>
        <a>My account</a>
        <a>Cart</a>
        <a>Whitelist</a>
        <a href="">Compare Products</a>
      </div>
      <div className="flex flex-col">
        <h1>Contact</h1>
        <a>About us</a>
        <a>Contact us</a>
        <a>Careers</a>
        <a>Blog</a>
      </div>
    </section>
  );
}

export default Footer;
