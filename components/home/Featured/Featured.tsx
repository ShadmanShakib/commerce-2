import React from "react";

import { ProductCard, H1 } from "components/ui";
function Featured() {
  return (
    <section>
      <H1 text="Featured Products" />
      <div>
        <ProductCard />
      </div>
    </section>
  );
}

export default Featured;
