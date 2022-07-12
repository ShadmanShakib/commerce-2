import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <section className="flex flex-row items-center">
      <div className="h-36 w-36">
        <Image
          layout="responsive"
          height={360}
          width={360}
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/logofooter_360x.png?v=1628507265"
          alt="footer_logo"
        />
      </div>
      <div>
        <h3>Good emails</h3>
        <p>Give your inbox some love with new products, tips, & more.</p>
        <input type="text" />
      </div>
      <div>
        <h1>Information</h1>
        <a>My account</a>
        <a>Cart</a>
        <a>Whitelist</a>
        <a href="">Compare Products</a>
      </div>
      <div>
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
