import React from "react";
import Image from "next/image";
import { QuantityInput, Button } from "components/ui";
function Stickyatc() {
  return (
    <section>
      <div className=" initialized fixed inset-x-0 bottom-0 z-40 bg-white transition-transform">
        <div className="container">
          {/* form begins */}
          <form
            method="post"
            className="form product-form initialized flex items-center justify-between lg:container"
          >
            <div className=" flex  items-center pr-2 md:flex">
              <div className="cursor-pointer py-1.5">
                <div>
                  <Image
                    alt="product"
                    height={60}
                    width={60}
                    src="https://cdn.shopify.com/s/files/1/0147/0962/0800/products/16_180x.png?v=1624267071"
                  />
                </div>
              </div>
              <div className=" ml-6">
                <h3 className="hover:text-color-primary-darker line-clamp-1 cursor-pointer text-base font-medium">
                  Flower Tote Bag
                </h3>
                <div>
                  <div className=" inline-flex flex-wrap items-center">
                    <span className="  text-color-regular-price">$64.50</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <QuantityInput />
              <Button varient="dark">Add to cart</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Stickyatc;
