import React from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
function Button(props: ButtonProps) {
  const className = cn(
    "bg-white text-black px-5 py-2 font-semibold rounded-md hover:scale-105 transform hover:bg-black hover:text-white transform duration-300",
    props.className
  );
  return <button className={className}>{props.children}</button>;
}

export default Button;
