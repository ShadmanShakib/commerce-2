import React from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
function Button(props: ButtonProps) {
  const btnClass = cn(
    "  font-semibold  hover:scale-105 transform   transform duration-300",
    props.className,
    {
      "rounded-md px-5 py-2": props.varient !== "rounded",
      " bg-white hover:bg-black hover:text-white text-black ":
        props.varient === "primary",
      "rounded-full p-3  bg-white hover:bg-black hover:text-white ":
        props.varient === "rounded",
      "text-black bg-transparent  border-2 border-black bg-white hover:bg-black hover:text-white text-black  ":
        props.varient === "outline",
      "bg-black text-white": props.varient === "dark",
    }
  );
  return (
    <button onClick={props.onClick} className={btnClass}>
      {props.children}
    </button>
  );
}

export default Button;
