import React from "react";
import Image from "next/image";
import { ProdDescriptionProps } from "./types";
export default function ProdDescription(props: ProdDescriptionProps) {
  const { description, src, title } = props;
  return (
    <article className=" flex w-full py-10">
      <div className="relative w-96">
        <Image
          layout="responsive"
          height={100}
          width={90}
          src={src}
          alt={title}
        />
      </div>
      <div>
        <h1>The Iconic Silhouette</h1>
        <p>{description}</p>
      </div>
    </article>
  );
}
