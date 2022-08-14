import React from "react";
import { ProductCard } from "components/ui";
function Recommendation() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <h1 className="mb-6 text-4xl">You Might Also Like</h1>
      <ProductCard
        title="Blue Floral Face Mask"
        image="https://cdn.shopify.com/s/files/1/0147/0962/0800/products/20_a_800x.png?v=1624267241
"
      />
    </section>
  );
}

export default Recommendation;
