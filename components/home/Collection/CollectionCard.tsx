import React from "react";
import Image from "next/image";
export default function CollectionCard() {
  return (
    <article>
      <Image
        height={400}
        width={600}
        alt="Collection 1"
        src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/8_1080x.jpg?v=1623387240"
      />
      <h2 className="text-lg font-semibold">
        Consume Pottery Among The Rainbow Mug
      </h2>
      <p>Shop now</p>
    </article>
  );
}
