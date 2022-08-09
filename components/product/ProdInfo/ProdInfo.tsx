import React from "react";
import { Button } from "components/ui";
export default function ProdInfo() {
  return (
    <article className="w-1/2 px-8">
      <h1 className="text-2xl">White Ceramic Flower Mug</h1>
      <div className="flex">
        <p className="text-xl">$22.99</p>
        <p>$28.50</p>
      </div>
      <h1>Quantity</h1>
      <div className="flex">
        <Button className="w-full" varient="outline">
          <span>Add to cart</span>
        </Button>
      </div>
      <div>
        <Button varient="primary">
          <span>Buy it now</span>
        </Button>
      </div>
    </article>
  );
}
