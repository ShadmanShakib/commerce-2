import React from "react";
import {
  ProductMedia,
  ProdInfo,
  Recommendation,
  ProdDetailTab,
} from "components/product";
import Stickyatc from "components/common/Stickyatc";
function product() {
  return (
    <main className="">
      <section className="mx-auto flex max-w-screen-xl">
        <ProductMedia />
        <ProdInfo />
      </section>
      <ProdDetailTab />
      <Recommendation />
      <Stickyatc />
    </main>
  );
}

export default product;
