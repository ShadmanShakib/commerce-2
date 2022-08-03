import React from "react";
import Image from "next/image";
import { Button } from "components/ui";
function Categories() {
  return (
    <section>
      <div className="grid gap-6 xl:grid-cols-2">
        <article className="group relative">
          <Image
            alt="product category"
            className="mr-6 transform duration-300 group-hover:scale-110"
            layout="fill"
            src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/4_900x.jpg?v=1623384855"
          />

          <div className="absolute flex w-full justify-center xl:bottom-20 ">
            <Button className="xl:h-12 xl:w-60" varient="primary">
              Show now
            </Button>
          </div>
        </article>

        <div>
          <div className="mb-6 grid gap-6 xl:grid-cols-2">
            <article className="group relative">
              <Image
                className="mr-6 transform duration-300 group-hover:scale-110"
                alt="product category"
                height={400}
                width={400}
                src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/5_660x.png?v=1623385692"
              />
              <div>
                <div className="absolute bottom-10 flex w-full justify-center">
                  <Button className="" varient="primary">
                    Show now
                  </Button>
                </div>
              </div>
            </article>
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
