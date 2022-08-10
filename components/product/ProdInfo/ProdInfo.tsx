import React from "react";
import { Button } from "components/ui";
import { BiShare } from "react-icons/bi";
export default function ProdInfo() {
  return (
    <article className="w-1/2 px-8 flex flex-col items-center">
      <h1 className="mb-5 text-2xl">White Ceramic Flower Mug</h1>
      <div className="flex items-center">
        <h1 className="mr-4 text-xl">$22.99</h1>
        <p className="line-through">$28.50</p>
      </div>
      <h1>Quantity</h1>
      <div className="mb-6 flex">
        <div className="grid grid-cols-3 content-center ">
          <Button>+</Button>
          <input defaultValue={1} type="number" />
          <Button>-</Button>
        </div>
        <Button className="mb-6 w-full" varient="outline">
          <span>Add to cart</span>
        </Button>
      </div>
      <div>
        <Button className="w-full" varient="dark">
          <span>Buy it now</span>
        </Button>
      </div>
      <div className="flex ">
        <div className="mr-5">
          <span>Compare</span>
        </div>
        <div className="mr-5">Ask a question</div>
        <div className="flex items-center">
          <BiShare size={20} />
          Share
        </div>
      </div>
    </article>
  );
}
