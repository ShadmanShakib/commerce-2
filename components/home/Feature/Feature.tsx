import React from "react";
import { data } from "./data";
import { map } from "underscore";
import Card from "./Card";
export default function Feature() {
  return (
    <section className="mx-auto grid max-w-screen-xl grid-cols-3 bg-gray-100 py-10">
      {map(data, (item, index) => {
        return <Card key={index} {...item} />;
      })}
    </section>
  );
}
