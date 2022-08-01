import React from "react";
import FeaturedCard from "./FeaturedCard";
function Featured() {
  return (
    <section>
      <h1 className="uppercase">Featured Products</h1>
      <div>
        <FeaturedCard />
      </div>
    </section>
  );
}

export default Featured;
