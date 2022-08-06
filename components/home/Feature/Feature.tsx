import React from "react";
import Image from "next/image";
export default function Feature() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <Image
          height={62}
          width={62}
          alt="free shipping"
          src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/free_shipping_62x.png?v=1623386888"
        />
        <h1 className="text-lg font-semibold">Free shipping</h1>
        <p>
          Get complimentary ground shipping on every order.Don’t love it? Send
          it back, on us.
        </p>
      </div>
    </section>
  );
}
