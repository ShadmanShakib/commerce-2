import React from "react";
import CollectionCard from "./CollectionCard";
export default function Collection() {
  return (
    <section className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 py-10 ">
      <CollectionCard src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/7_1080x.jpg?v=1623387208" />
      <CollectionCard src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/8_1080x.jpg?v=1623387240" />
    </section>
  );
}
