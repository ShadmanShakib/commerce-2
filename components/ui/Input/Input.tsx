import React from "react";
import cn from "classnames";
import { InputProps } from "./types";
export default function Input(props: InputProps) {
    return (
    <>
      <label className="mb-1" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="mb-2 rounded-sm py-2 px-2 outline-none ring-1 ring-gray-300 focus:ring-black"
        {...props}
      />
    </>
  );
}
