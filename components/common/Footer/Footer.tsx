import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div>
      <div>
        <Image
          layout="responsive"
          height={360}
          width={360}
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/logofooter_360x.png?v=1628507265"
          alt="footer_logo"
        />
      </div>
    </div>
  );
}

export default Footer;
