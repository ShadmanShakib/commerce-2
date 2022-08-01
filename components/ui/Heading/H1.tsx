import React from "react";
import { H1Props } from "./types";
function H1(props: H1Props) {
  const { text } = props;
  return <h1 className="text-3xl uppercase text-center">{text}</h1>;
}

export default H1;
