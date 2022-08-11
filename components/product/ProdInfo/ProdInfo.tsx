import React from "react";
import { Button } from "components/ui";
import { BiShare, BiQuestionMark, } from "react-icons/bi";
export default function ProdInfo() {
  return (
    //main
    <section className="w-1/2 px-8 flex flex-col justify-center ">
      <h1 className="mb-5 text-2xl">White Ceramic Flower Mug</h1>
      <div className="flex items-center">
        <h1 className="mr-4 text-xl">$22.99</h1>
        <p className="line-through">$28.50</p>
      </div>
      <h1>Quantity</h1>
      {/* quantity */}
      <div className="mb-6 flex">
        <div className="flex items-center ">
          <Button className="w-6">+</Button>
          <input className="w-6 outline-none" defaultValue={1} type="number" />
          <Button className="w-6">-</Button>
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
      <div className="flex mt-6">
        <div className="mr-5 flex items-center">
          <BiQuestionMark size={20} />
          <span>Compare</span>
        </div>
        <div className="mr-5 flex items-center">
          <BiQuestionMark size={20} />
          <span>   Ask a question</span>

        </div>
        <div className="flex items-center">
          <BiShare size={20} />
          Share
        </div>
      </div>
    </section>
  );
}
