import React from "react";

import { ProductCard, H1 } from "components/ui";
function Featured() {
  return (
    <section className="mx-auto max-w-screen-xl py-5">
      <H1 text="Featured Products" />
      <div className="grid grid-cols-5 gap-x-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Featured;
