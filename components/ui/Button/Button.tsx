import React from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
function Button(props: ButtonProps) {
  const className = cn(
    "bg-white text-black font-semibold  hover:scale-105 transform hover:bg-black hover:text-white transform duration-300",
    props.className,{
      "rounded-md px-5 py-2 ": props.varient==="primary",
     "rounded-full p-3":props.varient === "rounded",
    }
  );
  return <button className={className}>{props.children}</button>;
}

export default Button;
