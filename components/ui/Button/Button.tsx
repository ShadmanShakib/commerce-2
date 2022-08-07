import React from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
function Button(props: ButtonProps) {
  const className = cn(
    " text-black font-semibold  hover:scale-105 transform hover:bg-black hover:text-white transform duration-300",
    props.className,
    {
      "rounded-md px-5 py-2 bg-white ": props.varient === "primary",
      "rounded-full p-3 bg-white": props.varient === "rounded",
      "px-5 py-2 bg-transparent rounded-md border-2 border-black":
        props.varient === "outline",
    }
  );
  return <button className={className}>{props.children}</button>;
}

export default Button;
