import React from "react";
import Image from "next/image";
export default function FeaturedCard() {
  return (
    <article>
      <Image
        src="https://cdn.shopify.com/s/files/1/0147/0962/0800/products/18_800x.png?v=1624267157"
        alt="product 1"
        width={250}
        height={325}
      />
      <h1>Animation Greeting Card</h1>
    </article>
  );
}
