import React from "react";

export default function Newsletter() {
  return (
    <section className="flex flex-col items-center bg-gray-200 py-10 ">
      <h1 className="text-center text-3xl">
        10% Off & The Best Indie Art Ever!
      </h1>
      <div>
        <input
          className="mt-10 mb-5 h-10 px-3 outline-none xl:w-80"
          type="text"
          placeholder="Enter your email"
          name=""
          id=""
        />
        <button className="h-10 bg-white px-5">Subcribe</button>
      </div>
      <div className="flex items-center ">
        <input className="mr-4 h-5 w-5" type="checkbox" />
        <span>I agree with the Terms & conditions</span>
      </div>
    </section>
  );
}
