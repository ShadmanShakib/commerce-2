import React from "react";
import { useUI } from "utils/hooks";
import cn from "classnames";
import ProdDescription from "./ProdDescription";

function ProdDetailTab() {
  const { setProdDescriptionTab, prodDescriptionTab } = useUI();
  const btnClass = "py-3 px-5 ";
  const handleClick = (tab: "description" | "reviews" | "returns") => {
    setProdDescriptionTab(tab);
  };

  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="flex w-full justify-center">
        <button
          onClick={() => handleClick("description")}
          className={cn(btnClass, {
            "border-b-2 border-black": prodDescriptionTab === "description",
          })}
        >
          Product description
        </button>
        <button
          onClick={() => handleClick("returns")}
          className={cn(btnClass, {
            "border-b-2 border-black": prodDescriptionTab === "returns",
          })}
        >
          Shipping & Return
        </button>
        <button
          onClick={() => handleClick("reviews")}
          className={cn(btnClass, {
            "border-b-2 border-black": prodDescriptionTab === "reviews",
          })}
        >
          Product reviews
        </button>
      </div>
      {prodDescriptionTab === "description" ? (
        <ProdDescription
          description="he garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
          title="product1"
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/products/13_720x.png?v=1624266814"
        />
      ) : null}
    </section>
  );
}

export default ProdDetailTab;
