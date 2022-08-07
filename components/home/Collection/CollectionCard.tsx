import React from "react";
import Image from "next/image";
interface CardProps {
  src: string;
}
export default function CollectionCard(props: CardProps) {
  return (
    <article>
      <Image height={400} width={650} alt="Collection 1" src={props.src} />
      <h2 className="text-lg font-semibold">
        Consume Pottery Among The Rainbow Mug
      </h2>
      <p>Shop now</p>
    </article>
  );
}
