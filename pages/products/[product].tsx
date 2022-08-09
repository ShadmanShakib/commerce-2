import React from "react";
import { ProductMedia, ProdInfo, Recommendation } from "components/product";
function product() {
  return (
    <main className="">
      <h1>Product</h1>
      <section className="mx-auto flex max-w-screen-xl">
        <ProductMedia />
        <ProdInfo />
      </section>
      <Recommendation />
    </main>
  );
}

export default product;
