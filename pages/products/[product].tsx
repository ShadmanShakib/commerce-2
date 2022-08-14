import React from "react";
import {
  ProductMedia,
  ProdInfo,
  Recommendation,
  ProdDetailTab,
} from "components/product";
import Stickyatc from "components/common/Stickyatc";
import { Breadcrumb } from "components/ui";
function product() {
  return (
    <main className="">
      <Breadcrumb />
      <div className="mx-auto flex max-w-screen-xl">
        <ProductMedia />
        <ProdInfo />
      </div>
      <ProdDetailTab />
      <Recommendation />
      <Stickyatc />
    </main>
  );
}

export default product;
