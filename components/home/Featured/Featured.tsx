import React from "react";
import { map } from "underscore";
import { ProductCard, H1 } from "components/ui";
interface FeaturedProps {
  products: any;
}
function Featured(props: FeaturedProps) {
  const { products } = props;

  return (
    <section className="mx-auto max-w-screen-xl py-5">
      <H1 text="Featured Products" />
      <div className="grid grid-cols-5 gap-x-6">
        {map(products, (product) => {
          const { title, description, images } = product.attributes;
          const { attributes, url } = images.data[0];
          return (
            <ProductCard
              key={product.id}
              title={title}
              image={attributes.name}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Featured;
