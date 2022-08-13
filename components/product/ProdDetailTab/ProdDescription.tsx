import React from "react";
import Image from "next/image";
import { ProdDescriptionProps } from "./types";
export default function ProdDescription(props: ProdDescriptionProps) {
  const { description, src, title } = props;
  return (
    <article className=" flex w-full py-10">
      <div className="w-3/5">
        <Image
          layout="responsive"
          height={100}
          width={90}
          src={src}
          alt={title}
        />
      </div>
      <div className="ml-6">
        <h1 className="mb-6 text-xl font-semibold">The Iconic Silhouette</h1>
        <p>{description}</p>
      </div>
    </article>
  );
}
