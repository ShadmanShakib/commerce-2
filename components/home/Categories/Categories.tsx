import React from "react";
import Image from "next/image";
import { categoriesData } from "data/products";
function Categories() {
  return (
    <section>
      <div className="grid gap-6 xl:grid-cols-2">
        <Image
          alt="product category"
          height={500}
          width={500}
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/4_900x.jpg?v=1623384855"
        />
        <div>
          <div className="mb-6 grid gap-6 xl:grid-cols-2">
            <Image
              className="mr-6"
              alt="product category"
              height={400}
              width={400}
              src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/5_660x.png?v=1623385692"
            />
            <Image
              alt="product category 4"
              height={400}
              width={400}
              src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/6_660x.jpg?v=1623385718"
            />
          </div>
          <Image
            alt="product category"
            height={300}
            width={600}
            layout="responsive"
            src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/9_1380x.jpg?v=1623384954"
          />
        </div>
      </div>
    </section>
  );
}

export default Categories;
