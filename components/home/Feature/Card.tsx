import React from "react";
import Image from "next/image";
interface CardProps {
  title: string;
  src: string;
  description: string;
  id: number;
}
export default function Card(props: CardProps) {
  const { title, src, description, id } = props;
  return (
    <article className="flex flex-col items-center justify-center px-6">
      <Image height={62} width={62} alt={title} src={src} />
      <h1 className="text-lg font-semibold">{title}</h1>
      <span className=" w-80 text-center text-gray-700">{description}</span>
    </article>
  );
}
