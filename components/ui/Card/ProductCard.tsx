import React from "react";
import Image from "next/image";
import { Button } from "components/ui";
import { BiTransfer,BiPlus } from "react-icons/bi";
import cn from "classnames";

function ProductCard() {
  const groupHover =
    "invisible absolute -z-10 transform opacity-0 duration-300 group-hover:visible   group-hover:z-10  group-hover:opacity-100 ";

  return (
    <article>
      <div className="group relative h-[325px] w-[250px] ">
        <Image
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/products/18_800x.png?v=1624267157"
          alt="product 1"
          width={250}
          height={325}
          className="transform duration-300 group-hover:scale-110"
        />
        <div className={cn(groupHover, "-right-5 top-5 group-hover:right-5")}>
          <Button varient="rounded">
            <BiTransfer />
          </Button>
        </div>
         <div className={cn(groupHover, "-right-5 top-20 group-hover:right-5")}>
          <Button varient="rounded">
            <BiPlus />
          </Button>
        </div>
        <div
          className={cn(groupHover, "-bottom-10 left-5 group-hover:bottom-4 ")}
        >
          <Button varient="primary" className="w-52">
            <span className="text-sm">Add to cart</span>
          </Button>
        </div>
      </div>
      <h1>Animation Greeting Card</h1>
    </article>
  );
}

export default ProductCard;
